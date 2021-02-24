import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import NurseAssignService from 'themes/services/api/NurseAssignmentService';
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

const Index = ({ nurseAssigns, total }: { nurseAssigns: NurseAssignment[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const nurseAssignService = new NurseAssignService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "admin.nurseAssignments": "C"
  })
  const deletePer = checkPermission({
    "admin.nurseAssignment": "D"
  })
  const columns = [
    {
      title: t("nurse"),
      dataIndex: 'nurseName',
      key: 'users.fullname',
      sorter:true,
      filterable: true,
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.nurseAssignments.edit', 
        { id: record.id })}>{record.nurseCode} - {record.nurseName}</a>
    },
    {
      title: t('patient'),
      dataIndex: 'patientName',
      key: 'patients.fullname',
      sorter:true,
      filterable: true,
      render: (text: string, record: any) => <div>{record.patientCode} - {record.patientName} - {record.roomCode} - {record.bedCode}</div>
    },
    {
      title: t("nurseAssignments.dateBegin"),
      dataIndex: 'dateBegin',
      key: 'dateBegin',
      sorter:true,
      filterDate: true,
      width: '15%',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
    {
      title: t("nurseAssignments.dateEnd"),
      dataIndex: 'dateEnd',
      key: 'dateEnd',
      sorter:true,
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
    let [error, nurseAssigns]: any[] = await to(nurseAssignService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return nurseAssigns
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(nurseAssignService.delete({ ids: selectedIds }));
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
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.nurseAssignments.create")} type="primary" className='btn-top'>
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
        data={nurseAssigns}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let nurseAssignService = new NurseAssignService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, nurseAssigns]: any[] = await to(nurseAssignService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    nurseAssigns: useBaseHook.getData(nurseAssigns, "data", []),
    total: useBaseHook.getData(nurseAssigns, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "admin.nurseAssignments": "R",
  "nurse.nurseAssignments": "R",
  "admin.users.nurseAssignments": "R"
};
export default Index