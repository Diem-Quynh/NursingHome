import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button } from 'antd';
import UserService from 'themes/services/api/UserService';
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

const Index = ({ users, total }: { users: User[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const userService = new UserService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "admin.users": "C"
  })
  const deletePer = checkPermission({
    "admin.users": "D"
  })

  const columns = [
    {
      title: t("code"),
      dataIndex: 'code',
      key: 'code',
      filterable: true,
      width: '100px',
      render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.users.edit', { id: record.id })}>{record.code}</a>,
      
      fixed: 'left',
    },
    {
      title: t('name'),
      dataIndex: 'fullname',
      key: 'fullname',
      filterable: true,
      sorter: true,
      fixed: 'left',
    },
    {
      title: t('position'),
      dataIndex: 'position',
      key: 'position',
      filterable: true,
      width: '8%'
    },
    {
      title: t("userGroup"),
      dataIndex: 'groupName',
      key: 'user_groups.name',
      filterable: true,
    },
    {
      title: t("username"),
      dataIndex: 'username',
      key: 'username',
      filterable: true
    },
    {
      title: t('birthday'),
      dataIndex: 'birthday',
      key: 'birthday',
      filterDate: true,
      width: '7%',
      render: (text: string, record: any) => <div>{formaterDate(text)}</div>
    },
    {
      title: t('gender'),
      dataIndex: 'gender',
      key: 'gender',
      filterCheck: true,
      options: [{ label:t('male'), value:0 }, { label:t('female'), value:1 }],
      width: '6%',
      render: (text: string, record: any) => <div>{formaterGender(text)}</div>
    },
    {
      title: t('address'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('cardId'),
      dataIndex: 'cardId',
      key: 'cardId',
      filterable: true
    },
    {
      title: t("phone"),
      dataIndex: 'phone',
      key: 'phone',
      filterable: true,
    },
    {
      title: t("email"),
      dataIndex: 'email',
      key: 'email',
      filterable: true,
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
    let [error, users]: any[] = await to(userService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return users
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(userService.delete({ ids: selectedIds }));
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
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.users.create")} type="primary" className='btn-top'>
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
        data={users}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
        scroll={{ x: 1800 }}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let userService = new UserService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, users]: any[] = await to(userService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    users: useBaseHook.getData(users, "data", []),
    total: useBaseHook.getData(users, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "admin.users": "R"
};
export default Index