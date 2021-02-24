import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button, Typography, Row, Col } from 'antd';
import UserGroupService from 'themes/services/api/UserGroupService';
import _ from 'lodash'
import to from 'await-to-js'
import React, { useState } from 'react';
import useBaseHook from 'themes/hooks/BaseHooks'
import { UsergroupAddOutlined } from '@ant-design/icons';
import BreadCrumb from 'themes/components/Breadcumb'
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import usePermissionHook from "themes/hooks/PermissionHook";
const { Title, Text } = Typography;

const Index = ({ userGroups, total }: { userGroups: UserGroup[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const userGroupService = new UserGroupService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "root": "C"
  })
  const deletePer = checkPermission({
    "root": "D"
  })
  const updatePer = checkPermission({
    "root": "U"
  })
  const columns = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
      filterable:true,
      sorter:true,
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.userGroups.edit', { id: record.id })}>{record.name}</a>
    },
    {
      title: t("description"),
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: t("userGroups.decentralization"),
      dataIndex: 'decentralization',
      key: "decentralization",
      render: (text: string, record: any) => {
        if (createPer || updatePer) {
          return (
          <Button onClick={() => redirect("frontend.admin.userGroups.role", { id: record.id, name: record.name })} type="primary" className='btn-top'>
            <PlusCircleOutlined />
            {t('userGroups.add')}
          </Button>
          )
        } else return ""
      }   
    }
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
    let [error, userGroups]: any[] = await to(userGroupService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return userGroups
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(userGroupService.delete({ ids: selectedIds }));
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

  return <Layout title={t("pages:userGroups.index.title")} description={t("pages:userGroups.index.description")}>
    <div className="content">
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.userGroups.create")} type="primary" className='btn-top'>
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
        data={userGroups}
        rowSelection={{ selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
        scroll={{
          x: 600, 
          scrollToFirstRowOnChange: true
        }}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let userGroupService = new UserGroupService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, userGroups]: any[] = await to(userGroupService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    userGroups: useBaseHook.getData(userGroups, "data", []),
    total: useBaseHook.getData(userGroups, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "root": "R"
}
export default Index
