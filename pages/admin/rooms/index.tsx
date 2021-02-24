import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import RoomService from 'themes/services/api/RoomService';
import _ from 'lodash'
import to from 'await-to-js'
import React, { useState } from 'react';
import useBaseHook from 'themes/hooks/BaseHooks'
import usePermissionHook from "themes/hooks/PermissionHook";
import {PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';

const Index = ({ rooms, total }: { rooms: Room[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const roomService = new RoomService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "admin.rooms": "C"
  })
  const deletePer = checkPermission({
    "admin.rooms": "D"
  })
  const columns = [
    {
      title: t("code"),
      dataIndex: 'code',
      key: 'code',
      width: '20%',
      sorter: true,
      filterable: true,
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.rooms.edit', { id: record.id })}>{record.code}</a>
    },
    {
      title: t('rooms.bedNumber'),
      dataIndex: 'bedNumber',
      key: 'bedNumber',
      width: '20%',
      sorter: true
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
    let [error, rooms]: any[] = await to(roomService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return rooms
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(roomService.delete({ ids: selectedIds }));
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
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.rooms.create")} type="primary" className='btn-top'>
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
        data={rooms}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let roomService = new RoomService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, rooms]: any[] = await to(roomService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    rooms: useBaseHook.getData(rooms, "data", []),
    total: useBaseHook.getData(rooms, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "admin.rooms": "R"
};
export default Index