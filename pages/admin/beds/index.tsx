import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import BedService from 'themes/services/api/BedService';
import _ from 'lodash'
import to from 'await-to-js'
import React, { useState } from 'react';
import useBaseHook from 'themes/hooks/BaseHooks'
import usePermissionHook from "themes/hooks/PermissionHook";
import {PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';

const formaterStatus = (value: any) => {
  const { t } = useBaseHook();
  value = Math.round(Number(value))
  value = (value == 0 ? t('beds.empty') : t('beds.full'))
  return `${value}`
}

const Index = ({ beds, total }: { beds: Bed[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const bedService = new BedService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "admin.beds": "C"
  })
  const deletePer = checkPermission({
    "admin.beds": "D"
  })
  const columns = [
    {
      title: t("room"),
      dataIndex: 'roomCode',
      key: 'roomCode',
      sorter: true,
      filterable:true,
      width: '20%',
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.beds.edit', { id: record.id })}>{record.roomCode}</a>
    },
    {
      title: t('beds.bedId'),
      dataIndex: 'bedId',
      key: 'bedId',
      width: '20%',
    },
    {
      title: t('status'),
      dataIndex: 'status',
      sorter: true,
      filterCheck: true,
      options: [{ label:t('beds.empty'), value:0 }, { label:t('beds.full'), value:1 }],
      key: 'status',
      width: '20%',
      render: (text: string, record: any) => <div>{formaterStatus(text)}</div>
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
    let [error, beds]: any[] = await to(bedService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return beds
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(bedService.delete({ ids: selectedIds }));
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
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.beds.create")} type="primary" className='btn-top'>
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
        data={beds}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let bedService = new BedService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, beds]: any[] = await to(bedService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    beds: useBaseHook.getData(beds, "data", []),
    total: useBaseHook.getData(beds, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "admin.beds": "R"
};
export default Index