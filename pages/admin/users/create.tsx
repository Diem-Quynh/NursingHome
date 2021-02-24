import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select,  DatePicker, Radio } from 'antd';
import UserService from 'themes/services/api/UserService';
import UserGroupService from 'themes/services/api/UserGroupService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { DeleteFilled, LeftCircleFilled } from '@ant-design/icons';

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
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const userService = new UserService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let { rePassword, ...otherValues } = values;
    let [error, result]: any[] = await to(userService.create(otherValues));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.users.index")
  }

  //validate input password
  const validatorPassword = ({ getFieldValue }: { getFieldValue: Function }) => ({
    validator: (rule: any, value: any) => {
      if ( /* !value || */ getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(t('form.rePassword'));
    }
  })

  //validate fill input password
  const validatorFillPassword = ({ getFieldValue }: { getFieldValue: Function }) => ({
    validator: (rule: any, value: any) => {
      if ( getFieldValue('username') && !value) {
        return Promise.reject(t('form.fillPassword'));
      }
      return Promise.resolve();
    }
  })

  //validate fill input username
  const validatorFillUsername = ({ getFieldValue }: { getFieldValue: Function }) => ({
    validator: (rule: any, value: any) => {
      if ( getFieldValue('password') && !value) {
        return Promise.reject(t('form.fillUsername'));
      }
      return Promise.resolve();
    }
  })

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
  
  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createUser"
        initialValues={{
          code: "",
          fullname: "",
          position: "",
          birthday: "",
          gender: "",
          address: "",
          cardId: "",
          email: "",
          phone: "",
          username: "",
          password: "",
          rePassword: "",
          groupId: undefined
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t("code")}
          name="code"
          rules={[
            { required: true, message: t('form.required'), whitespace: false },
            { max: 8, message: t('form.maxLength', { length: 8 }) }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("fullname")}
          name="fullname"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label={t("position")}
          name="position"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("userGroup")}
          name="groupId"
          // rules={[
          //   { required: true, message: t('form.required') },
          // ]}
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
          label={t("birthday")}
          name="birthday"
        >
          <DatePicker format={'YYYY-MM-DD'} placeholder={t('placeholder.date')} showTime={false}/>
        </Form.Item>

        <Form.Item
          label={t("gender")}
          name="gender"
        >
          <Radio.Group>
            <Radio value={0} key={0}>{t("male")}</Radio>
            <Radio value={1} key={1}>{t("female")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={t("address")}
          name="address"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("cardId")}
          name="cardId"
          rules={[
            { pattern: /^[0-9]+$/g, message: t('form.number') },
            { max: 12, message: t('form.maxLength', { length: 12 }) }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("email")}
          name="email"
          rules={[
            { type: 'email', message: t('form.email') }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("phone")}
          name="phone"
          rules={[
            { pattern: /^[0-9]+$/g, message: t('form.number') },
            { max: 12, message: t('form.maxLength', { length: 12 }) },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("username")}
          name="username"
          rules={[
          //   { required: true, message: t('form.required'), whitespace: true },
          //   { max: 15, message: t('form.maxLength', { length: 15 }) },
            validatorFillUsername
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("password")}
          name="password"
          rules={[
            // { required: true, message: t('form.required') },
            { min: 6, message: t('form.minLength', { length: 6 }) },
            validatorFillPassword
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={t("rePassword")}
          name="rePassword"
          rules={[
            // { required: true, message: t('form.required') },
            validatorPassword
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
          <Button onClick={() => redirect("frontend.admin.users.index")} style={{ marginRight: 8}}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            <DeleteFilled /> {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  </Layout>
}

Create.getInitialProps = async (ctx: any) => {
  const userGroupService = new UserGroupService(ctx)
  const [error, groups] = await to(userGroupService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages','menu','errors'],
    error: error,
    groups: _.get(groups, "data", []),
  }
}
Create.permissions = {
  "admin.users": "C"
};
export default Create