import Layout from 'themes/layouts/Admin'
import { GridTable, GridTableHelper, FilterInput } from 'themes/components/Table';
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import { Button, Checkbox } from 'antd';
import UserPermissionService from 'themes/services/api/UserPermissionService';
import _ from 'lodash'
import to from 'await-to-js'
import React, { useState } from 'react';
import useBaseHook from 'themes/hooks/BaseHooks'
import usePermissionHook from "themes/hooks/PermissionHook";
import {PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';

const Index = ({ permissions, total }: { permissions: Permission[], total: number }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [hiddenDeleteBtn, setHiddenDeleteBtn] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const permissionService = new UserPermissionService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const tableRef = React.createRef<GridTable>()
  const { checkPermission } = usePermissionHook();
  const createPer = checkPermission({
    "root": "C"
  })
  const deletePer = checkPermission({
    "root": "D"
  })

  const renderCheckbox = (row: any, permission: number) => {
    const checked = (row.avalibleValue & permission) === permission
    return <Checkbox defaultChecked={checked} disabled ></Checkbox>
  }

    const columns = [
      {
        title: t('userPermissions.key'),
        dataIndex: 'keyName',
        key: 'user_permissions.key',
        width: '18%',
        filterable: true,
        sorter: true,
        render: (text: string, record: any) =>
        <a onClick={() => redirect('frontend.admin.userPermissions.edit', { id: record.id })}>{record.keyName}</a>
      },
      {
        title: t('userPermissions.name'),
        dataIndex: 'name',
        key: 'user_permissions.name',
        filterable: true
      },
      {
        title: t('group'),
        dataIndex: 'groupName',
        key: 'user_groups.name',
        sorter: true,
        filterable: true
      },
      {
        title: t('description'),
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: t('userPermissions.avalibleValue'),
        children: [
          {
            title: t("create"),
            dataIndex: 'value',
            key: 'valueC',
            width: '6%',
            render: (value: any, row: any) => renderCheckbox(row, 8)
          },
          {
            title: t("view"),
            dataIndex: 'value',
            key: 'valueR',
            width: '5%',
            render: (value: any, row: any) => renderCheckbox(row, 4)
          },
          {
            title: t("edit"),
            dataIndex: 'value',
            key: 'valueU',
            width: '5%',
            render: (value: any, row: any) => renderCheckbox(row, 2)
          },
          {
            title: t("delete"),
            dataIndex: 'value',
            key: 'valueD',
            width: '5%',
            render: (value: any, row: any) => renderCheckbox(row, 1)
          }
        ]
      },
      
    ];

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
    let [error, permissions]: any[] = await to(permissionService.index(values))
    if (error) {
      const { code, message } = error
      notify(t(`errors:${code}`), t(message), 'error')
      return {}
    }
    return permissions
  }

  const onDelete = async () => {
    let [error, result]: any[] = await to(permissionService.delete({ ids: selectedIds }));
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
    <div className="content" id="permission">
      <Button hidden={!createPer} onClick={() => redirect("frontend.admin.userPermissions.create")} type="primary" className='btn-top'>
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
        data={permissions}
        rowSelection={{selectedRowKeys: selectedIds, onChange: (data: any[]) => onChangeSelection(data) }}
        fetchData={fetchData}
        total={total}
      />
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Index.getInitialProps = async (ctx: any) => {
  let permissionService = new UserPermissionService(ctx)
  let defaultOptions = {
    filters: [],
    sorting: []
  }
  let query = ctx.query
  let filters = GridTableHelper.getOptions(query, defaultOptions);
  let [error, permissions]: any[] = await to(permissionService.index(filters))
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    permissions: useBaseHook.getData(permissions, "data", []),
    total: useBaseHook.getData(permissions, "total", 0),
    defaultQuery: {
      filters: GridTableHelper.makeQuery(filters)
    }
  }
}
Index.permissions = {
  "root": "R"
};
export default Index