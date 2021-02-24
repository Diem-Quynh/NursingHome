import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import DoctorAssignService from 'themes/services/api/DoctorAssignmentService';
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

const Index = ({ doctorAssigns, total }: { doctorAssigns: DoctorAssignment[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const doctorAssignService = new DoctorAssignService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "admin.doctorAssignments": "C"
  })
  const deletePer = checkPermission({
    "admin.doctorAssignment": "D"
  })
  const columns = [
    {
      title: t("doctor"),
      dataIndex: 'fullname',
      key: 'users.fullname',
      sorter: true,
      filterable:true,
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.doctorAssignments.edit', 
        { id: record.id })}>{record.doctorCode} - {record.fullname}</a>
    },
    {
      title: t('room'),
      dataIndex: 'roomCode',
      key: 'roomCode',
      sorter: true,
      filterable:true,
      width: '15%'
    },
    {
      title: t("doctorAssignments.dateBegin"),
      dataIndex: 'dateBegin',
      key: 'dateBegin',
      sorter: true,
      filterDate: true,
      width: '15%',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
    {
      title: t("doctorAssignments.dateEnd"),
      dataIndex: 'dateEnd',
      key: 'dateEnd',
      sorter: true,
      filterDate: true,
      width: '15%',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
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
    let [error, doctorAssigns]: any[] = await to(doctorAssignService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return doctorAssigns
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(doctorAssignService.delete({ ids: selectedIds }));
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
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.doctorAssignments.create")} type="primary" className='btn-top'>
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
        data={doctorAssigns}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let doctorAssignService = new DoctorAssignService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, doctorAssigns]: any[] = await to(doctorAssignService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    doctorAssigns: useBaseHook.getData(doctorAssigns, "data", []),
    total: useBaseHook.getData(doctorAssigns, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "admin.doctorAssignments": "R",
  "doctor.doctorAssignments":"R",
  "admin.users.doctorAssignments":"R",
};
export default Index