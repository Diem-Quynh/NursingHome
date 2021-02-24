import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Typography, Checkbox } from 'antd';
import UserPermissionService from 'themes/services/api/UserPermissionService';
import UserGroupService from 'themes/services/api/UserGroupService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { LeftCircleFilled, SaveFilled } from '@ant-design/icons';
import BreadCrumb from 'themes/components/Breadcumb'
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


const Create = ({ groups }: { groups: UserGroup[] }) => {
  const { t, notify, redirect, router } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const permissionService = new UserPermissionService()

  // save avalibleValue of permission
  let result: any = {avalibleValue: 0}

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let [error, result]: any[] = await to(permissionService.create(values));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.userPermissions.index")
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
          key: "",
          name: "",
          description: "",
          groupId: undefined
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
          <Button onClick={() => router.back()} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>
          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  </Layout>
}

Create.getInitialProps = async (ctx: any) => {
  const groupService = new UserGroupService(ctx)
  const [error, groups] = await to(groupService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    groups: _.get(groups, "data", []),
  }
}
Create.permissions = {
  "root": "C"
}
export default Create