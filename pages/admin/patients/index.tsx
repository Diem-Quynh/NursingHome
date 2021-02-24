import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import PatientService from 'themes/services/api/PatientService';
import _ from 'lodash'
import to from 'await-to-js'
import React, { useState } from 'react';
import useBaseHook from 'themes/hooks/BaseHooks'
import usePermissionHook from "themes/hooks/PermissionHook";
import {PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';

const formaterGender = (value: any) => {
  const { t } = useBaseHook();
  value = Math.round(Number(value))
  value = (value == 0 ? t('male') : t('female'))
  return `${value}`
}

const formaterDate = (value: any) => {
  value = value? String(value) : ""
  value = value.substr(0,10)
  return `${value}`
}

const Index = ({ patients, total }: { patients: Patient[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const patientService = new PatientService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "admin.patients": "C",
    "receptionist.patients": "C"
  })
  const deletePer = checkPermission({
    "admin.patients": "D"
  })
  const columns = [
    {
      title: t("patient"),
      dataIndex: 'code',
      key: 'code',
      filterable: true,
      fixed: 'left',
    },
    {
      title: t("fullname"),
      dataIndex: 'fullname',
      key: 'fullname',
      sorter:true,
      filterable: true,
      fixed: 'left',
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.patients.edit', { id: record.id })}>{record.fullname}</a>
    },
    {
      title: t('room'),
      dataIndex: 'roomCode',
      sorter:true,
      filterable: true,
      key: 'beds.roomCode',
      fixed:'left',
      render: (text: string, record: any) => <div>{record.roomCode} - {record.bedCode}</div>
    },
    {
      title: t('birthday'),
      dataIndex: 'birthday',
      key: 'birthday',
      filterDate: true,
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
    {
      title: t("gender"),
      dataIndex: 'gender',
      key: 'gender',
      filterCheck: true,
      options: [{ label:t('male'), value:0 }, { label:t('female'), value:1 }],
      width: '7%',
      render: (text: string, record: any) => <div>{formaterGender(text)}</div>
    },
    {
      title: t("address"),
      dataIndex: 'address',
      key: 'address',
      filterable: true,
    },
    {
      title: t("cardId"),
      dataIndex: 'cardId',
      key: 'cardId',
      filterable: true,
    },
    {
      title: t("phone"),
      dataIndex: 'phone',
      key: 'phone',
      filterable: true,
    },
    {
      title: t("patients.medicalHistory"),
      dataIndex: 'medicalHistory',
      key: 'medicalHistory',
      filterable: true,
    },
    {
      title: t("patients.dateIn"),
      dataIndex: 'dateIn',
      sorter:true,
      filterDate: true,
      key: 'dateIn',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
    {
      title: t("patients.dateOut"),
      dataIndex: 'dateOut',
      sorter:true,
      filterDate: true,
      key: 'dateOut',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
  ]

  const onChangeSelection = (data: any) => {
    if (data.length > 0) {
      setHiddenDeleteBtn(false)
    }
    else {
      setHiddenDeleteBtn(true)
    }
    setSelectedIds(data)
  }

  const fetchData = async (values: any) => {
    let [error, patients]: any[] = await to(patientService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return patients
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(patientService.delete({ ids: selectedIds }));
    if (error) {
      return notify(t(`errors:${error.code}`), t(`${error.message}`), 'error')
    }
    notify(t("message.recordDeleted"));
    if (tableRef.current !== null) {
      tableRef.current.reload()
    }
    setSelectedIds([])
    setHiddenDeleteBtn(true)
  }

  const renderDeleteDialog = () => {
    return (
      <ConfirmDialog
        ref={confirmRef}
        onSubmit={onDelete}
        title={t('deleteItem')}
        content={t('message.deleteConfirm')}
      />
    )
  }

  return <Layout>
    <div className="content">
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.patients.create")} type="primary" className='btn-top'>
        <PlusCircleOutlined />
        {t('create')}
      </Button>

      <Button danger onClick={() => { if (confirmRef.current) confirmRef.current.show() }} className='btn-top' hidden={hiddenDeleteBtn || !deletePer}>
        <DeleteOutlined />
        {t('delete')}
      </Button>
      
      <GridTable
        ref={tableRef}
        columns={columns}
        data={patients}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
        scroll={{ x:1400 }}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let patientService = new PatientService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, patients]: any[] = await to(patientService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    patients: useBaseHook.getData(patients, "data", []),
    total: useBaseHook.getData(patients, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "admin.patients": "R",
  "doctor.patients": "R",
  "nurse.patients": "R",
  "receptionist.patients": "R",
};
export default Index