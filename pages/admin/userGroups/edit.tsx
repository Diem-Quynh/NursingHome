import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Typography } from 'antd';
import UserGroupService from 'themes/services/api/UserGroupService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { LeftCircleFilled, SaveFilled, DeleteFilled } from '@ant-design/icons';
import BreadCrumb from 'themes/components/Breadcumb'
import usePermissionHook from "themes/hooks/PermissionHook";
const { Title, Text } = Typography;

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


const Edit = ({ group, groupError }: { group: UserGroup, groupError: any }) => {
  const { t, notify, redirect, router } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const userGroupService = new UserGroupService()
  const confirmRef = React.createRef<ConfirmDialog>()
  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "root": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(groupError) return DisplayError(groupError)
    setLoading(true)
    let [error, result]: any[] = await to(userGroupService.edit({
      id: group.id,
      values
    }));
    setLoading(false)
    if (error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.userGroups.index")
  }

  const onDelete = async (): Promise<void> => {
    if(groupError) return DisplayError(groupError)
    let [error, result]: any[] = await to(userGroupService.delete({ ids: [group.id] }));
    if (error) return DisplayError(error)
    notify(t('message.recordDeleted'))
    redirect("frontend.admin.userGroups.index")
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
      <Form
        {...formItemLayout}
        form={form}
        name="createUserGroup"
        initialValues={{
          name: group.name,
          description: group.description,
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t("name")}
          name="name"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("description")}
          name="description"
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => router.back()} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>
          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          <Button hidden={!deletePer} danger onClick={() => { if (confirmRef.current) confirmRef.current.show(group.id) }}>
            <DeleteFilled /> {t('deleteItem')}
          </Button>
        </Form.Item>
      </Form>
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Edit.getInitialProps = async (ctx: any) => {
  const userGroupService = new UserGroupService(ctx)
  const query = ctx.query;
  let error: any;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    }
  }

  let [groupError, group] = await to(userGroupService.detail({ id: query.id }));
  if(groupError) group = {}
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    group: group,
    groupError: groupError
  }
}
Edit.permissions = {
  "root": "U"
}
export default Edit