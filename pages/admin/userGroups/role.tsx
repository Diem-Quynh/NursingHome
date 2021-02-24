import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Typography, Checkbox } from 'antd';
import { Table } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import UserPermissionService from 'themes/services/api/UserPermissionService';
import UserGroupPermissionService from 'themes/services/api/UserGroupPermissionService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { LeftCircleFilled, SaveFilled, DeleteFilled } from '@ant-design/icons';
import BreadCrumb from 'themes/components/Breadcumb'
import { getInputClassName } from 'antd/lib/input/Input';
const { Title, Text } = Typography;

const Role = ({ permissionCategories, groupId, groupName }: { permissionCategories: PermissionCategories[], groupId: number, groupName: string }) => {
  let result: any = {}
  const { t, notify, redirect, router } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const userGroupPermissionService = new UserGroupPermissionService()
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let [error, result]: any[] = await to(userGroupPermissionService.update({
      permissions: values,
      groupId: groupId
    }));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.userGroups.index")
  }

  const renderCheckbox = (row: any, permission: number) => {
    function onChange(e: any) {
      e.target.checked ? row.value += permission : row.value -= permission;
      result[row.key] = row.value
    }
    const checked = (row.value & permission) === permission
    const disabled = (row.avalibleValue & permission) !== permission
    return <Checkbox defaultChecked={checked} disabled={disabled} onChange={onChange}></Checkbox>
  }

  const renderPermissionCategory = (category: any) => {
    const columns = [
      {
        title: "#",
        // dataIndex: 'id',
        key: 'id',
        width: '5%',
      },
      {
        title: category.name,
        // dataIndex: 'name',
        key: 'name',

      },
      {
        title: t("create"),
        dataIndex: 'value',
        key: 'valueC',
        width: '10%',
        render: (value: any, row: any) => renderCheckbox(row, 8)
      },
      {
        title: t("view"),
        dataIndex: 'value',
        key: 'valueR',
        width: '10%',
        render: (value: any, row: any) => renderCheckbox(row, 4)
      },
      {
        title: t("edit"),
        dataIndex: 'value',
        key: 'valueU',
        width: '10%',
        render: (value: any, row: any) => renderCheckbox(row, 2)
      },
      {
        title: t("delete"),
        dataIndex: 'value',
        key: 'valueD',
        width: '10%',
        render: (value: any, row: any) => renderCheckbox(row, 1)
      }
    ];
    return <Table size="small" key={category.id} columns={columns} dataSource={[category]} pagination={false} />
  }
  return <Layout>
    <div className="content">
      <div style={{ fontSize: "17px", marginBottom: "15px" }}>{t('group')}: { groupName }</div>
      {permissionCategories.map((g: any) => renderPermissionCategory(g))}
      <div style={{ marginTop: "24px", textAlign: "center"}}>
        <Button onClick={() => router.back()} style={{ marginRight: 8 }}>
          <LeftCircleFilled /> {t('cancel')}
        </Button>
        <Button onClick={() => onFinish(result)} type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
          <SaveFilled /> {t('submit')}
        </Button>
      </div>
    </div>

  </Layout>
}

Role.getInitialProps = async (ctx: any) => {
  const userPermissionService = new UserPermissionService(ctx)
  const query = ctx.query;
  let error: any;

  if (!query.id) {
    error = {
      code: 9996,
      message: 'missing ID'
    }
  }

  let [permissionError, permissionCategories] = await to(userPermissionService.getByGroupId({ groupId: query.id }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    permissionCategories: permissionCategories,
    groupId: query.id,
    groupName: query.name
  }
}
Role.permissions = {
  "root": "U"
}
export default Role