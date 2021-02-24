import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import HealthService from 'themes/services/api/HealthStatusService';
import _ from 'lodash'
import to from 'await-to-js'
import React, { useState } from 'react';
import useBaseHook from 'themes/hooks/BaseHooks'
import usePermissionHook from "themes/hooks/PermissionHook";
import {PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';

const formaterDate = (value: any) => {
  value = value? String(value) : ""
  value = value.substr(0,10)
  return `${value}`
}

const Index = ({ healths, total }: { healths: HealthStatus[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const healthService = new HealthService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    // "admin.healthStatuses": "C",
    'doctor.healthStatuses': 'C'
  })
  const deletePer = checkPermission({
    // "admin.healthStatuses": "D",
    "doctor.healthStatuses": "D"
  })
  const columns = [
    {
      title: t("patient"),
      dataIndex: 'patientName',
      key: 'patients.fullname',
      sorter:true,
      filterable: true,
      fixed:'left',
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.healthStatuses.edit', 
        { id: record.id })}>{record.patientCode} - {record.patientName} - {record.roomCode} - {record.bedCode}</a>
    },
    {
      title: t("healthStatuses.date"),
      dataIndex: 'date',
      key: 'date',
      sorter:true,
      filterDate: true,
      fixed:'left',
      width: '9%',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
    {
      title: t('doctor'),
      dataIndex: 'doctorName',
      key: 'users.fullname',
      sorter:true,
      filterable: true,
      render: (text: string, record: any) => <div>{record.doctorCode} - {record.doctorName}</div>
    },
    {
      title: t("healthStatuses.weight") + " (Kg)",
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: t("healthStatuses.bloodPressure") + " (mmHg)",
      dataIndex: 'bloodPressure',
      key: 'bloodPressure',
    },
    {
      title: t("healthStatuses.bloodSugar") + " (mg/dL)",
      dataIndex: 'bloodSugar',
      key: 'bloodSugar',
    },
    {
      title: t("healthStatuses.heartRate") + " (BPM)",
      dataIndex: 'heartRate',
      key: 'heartRate',
    },
    {
      title: t("note"),
      dataIndex: 'note',
      key: 'note',
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
    let [error, healths]: any[] = await to(healthService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return healths
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(healthService.delete({ ids: selectedIds }));
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
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.healthStatuses.create")} type="primary" className='btn-top'>
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
        data={healths}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
        scroll={{ x:1500 }}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let healthService = new HealthService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, healths]: any[] = await to(healthService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    healths: useBaseHook.getData(healths, "data", []),
    total: useBaseHook.getData(healths, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "doctor.healthStatuses": "R",
  "nurse.healthStatuses": "R"
};
export default Index