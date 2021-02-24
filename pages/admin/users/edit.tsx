import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Modal, Radio, DatePicker } from 'antd';
import UserService from 'themes/services/api/UserService';
import UserGroupService from 'themes/services/api/UserGroupService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { DeleteFilled, SaveFilled, LeftCircleFilled, CopyFilled } from '@ant-design/icons';
import usePermissionHook from "themes/hooks/PermissionHook";
import moment from 'moment'

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

const Edit = ({ groups, user, userError }: { groups: UserGroup[], user: User, userError:any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  const [form] = Form.useForm();
  const userService = new UserService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.users": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(userError) { return DisplayError(userError) }
    setLoading(true)
    let { rePassword, ...otherValues } = values;
    let [error, result]: any[] = await to(userService.edit({
      id: user.id,
      ...otherValues
    }));
    setLoading(false)

    if (error) { return DisplayError(error) }
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.users.index")
  }

  const onDelete = async (): Promise<void> => {
    if(userError) { return DisplayError(userError) }
    let [error, result]: any[] = await to(userService.delete({ ids: [user.id] }));

    if (error) { return DisplayError(error) }
    notify(t('message.recordDeleted'))
    redirect("frontend.admin.users.index")
  }
  
  const onChangePassword = async (data: any): Promise<void> => {
    setModalVisible(false)
    if(userError) { return DisplayError(userError) }
    let values = { id: user.id, password: data.password }

    let [error, result]: any[] = await to(userService.updatePassword(values));
    if (error) { return DisplayError(error) }

    notify(t("message.recordUpdated"))
  }

  //validate input password
  const validatorPassword = ({ getFieldValue }: { getFieldValue: Function }) => ({
    validator: (rule: any, value: any) => {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(t('form.rePassword'));
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

  const renderChangePassModal = () => {
    const [formChangePassword2] = Form.useForm()
    return (<Form form={formChangePassword2} name="formChangePassword2"
      initialValues={{
        password: "",
        repassword: "",
      }}
      onFinish={onChangePassword}
    >
      <Modal
        closable={false}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => { formChangePassword2.submit(); }}
      >
        <Form.Item
          label={t("password")}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          name="password"
          rules={[
            { required: true, message: t('form.required') }
          ]}
        >
          <Input.Password
            placeholder={t("password")}
            type="password"
            autoFocus={true}
          />
        </Form.Item>
        <Form.Item
          label={t("rePassword")}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          name="repassword"
          rules={[
            { required: true, message: t('form.required') },
            validatorPassword
          ]}
        >
          <Input.Password
            placeholder={t("rePassword")}
          />
        </Form.Item>
      </Modal>
    </Form>
    )
  }

  return <Layout disabledSearch = {true} >
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createUser"
        initialValues={{
          code: user.code,
          fullname: user.fullname,
          position: user.position,
          birthday: user.birthday ? moment(user.birthday).subtract(7,'h') : "",
          gender: user.gender,
          address: user.address,
          cardId: user.cardId,
          email: user.email,
          phone: user.phone,
          username: user.username,
          groupId: user.groupId
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
          label={t("username")}
          name="username"
          // rules={[
          //   { required: true, message: t('form.required'), whitespace: true },
          //   { max: 15, message: t('form.maxLength', { length: 15 }) }
          // ]}
        >
          <Input />
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
            { max: 12, message: t('form.maxLength', { length: 12 }) }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => redirect("frontend.admin.users.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          <Button onClick={() => { setModalVisible(true) }} style={{ marginRight: 8 }}>
            <CopyFilled /> {t('changePassword')}
          </Button>
          
          <Button hidden={!deletePer} danger onClick={() => { if (confirmRef.current) confirmRef.current.show(user.id) }}>
            <DeleteFilled /> {t('deleteItem')}
          </Button>
         
        </Form.Item>
      </Form>
      {renderDeleteDialog()}
      {renderChangePassModal()}
    </div>
  </Layout>
}

Edit.getInitialProps = async (ctx: any) => {
  const userGroupService = new UserGroupService(ctx)
  const userService = new UserService(ctx)
  const query = ctx.query;
  let error: any;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    }
  }

  let [userError, user] = await to(userService.detail({ id: query.id }));
  if (userError) user = {}
  const [errorGroup, groups] = await to(userGroupService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    user: user,
    userError: userError,
    groups: _.get(groups, "data", []),
  }
}
Edit.permissions = {
  "admin.users": "U"
};
export default Edit