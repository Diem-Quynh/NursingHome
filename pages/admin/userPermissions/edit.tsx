import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Checkbox, InputNumber } from 'antd';
import PermissionService from 'themes/services/api/UserPermissionService';
import GroupService from 'themes/services/api/UserGroupService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { DeleteFilled, SaveFilled, LeftCircleFilled, CopyFilled } from '@ant-design/icons';
import usePermissionHook from "themes/hooks/PermissionHook";

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const Edit = ({ groups, permission, permissionError }: { groups: UserGroup[], permission: Permission, permissionError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const permissionService = new PermissionService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "root": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }

  // save avalibleValue of permission
  let result: any = {avalibleValue: permission.avalibleValue}

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(permissionError) return DisplayError(permissionError)
    setLoading(true)
    let [error, result]: any[] = await to(permissionService.edit({
      id: permission.id,
      values
    }));
    setLoading(false)
    if (error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.userPermissions.index")
  }

  const onDelete = async (): Promise<void> => {
    if(permissionError) return DisplayError(permissionError)
    let [error, result]: any[] = await to(permissionService.delete({ ids: [permission.id] }));
    if (error) return DisplayError(error)
    notify(t('message.recordDeleted'))
    redirect("frontend.admin.userPermissions.index")
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

  //render option
  const renderOption = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    groups.map(item => {
      result.push(
        <Option value={item.id} key={item.id}>{item.name}</Option>
      )
    })
    return result;
  }

  const renderCheckbox = (avalibleValue: any) => {
    let checkbox: JSX.Element[] = [];
    const options = [
      {title: t('create'), value:8},
      {title: t('view'), value:4},
      {title: t('edit'), value:2},
      {title: t('delete'), value:1}
    ]
    function onChange(e: any, permission: number ) {
      e.target.checked ? avalibleValue += permission : avalibleValue -= permission;
      result['avalibleValue'] = avalibleValue
    }
    const checked = (permission:number) => {return (avalibleValue & permission) === permission}
    options.map(item => {
      checkbox.push(
        <Checkbox defaultChecked={checked(item.value)} onChange={(e)=>onChange(e,item.value)} key={item.title}>
          {item.title}
        </Checkbox>
      )
    })
    return checkbox
  }

  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createPermission"
        initialValues={{
          key: permission.key,
          name: permission.name,
          description: permission.description,
          groupId: permission.groupId
        }}
        onFinish={(e) => onFinish(Object.assign(result,e))}
        scrollToFirstError
      >
        <Form.Item
          label={t("userPermissions.key")}
          name="key"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("userPermissions.name")}
          name="name"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("group")}
          name="groupId"
          rules={[
            { required: true, message: t('form.required')}
          ]}
        >
          <Select
            showSearch
            placeholder = {t('placeholder.group')}
            filterOption={ (input: any, option: any) => {
              return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            } }
          >
            {renderOption()}
          </Select>
        </Form.Item>
        <Form.Item
          label={t("description")}
          name="description"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("userPermissions.avalibleValue")}
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          { renderCheckbox(result.avalibleValue) }
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => redirect("frontend.admin.userPermissions.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button  type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          <Button hidden={!deletePer} danger onClick={() => { if (confirmRef.current) confirmRef.current.show(permission.id) }}>
            <DeleteFilled /> {t('deleteItem')}
          </Button>
         
        </Form.Item>
      </Form>
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Edit.getInitialProps = async (ctx: any) => {
  const groupService = new GroupService(ctx)
  const permissionService = new PermissionService(ctx)
  const query = ctx.query;
  let error: any;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    }
  }

  let [permissionError, permission] = await to(permissionService.detail({ id: query.id }));
  if(permissionError) permission = {}
  const [errorGroup, groups] = await to(groupService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    permissionError: permissionError,
    permission: permission,
    groups: _.get(groups, "data", []),
  }
}
Edit.permissions = {
  "root": "U"
};
export default Edit