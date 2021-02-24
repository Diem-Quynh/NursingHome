import { useState } from 'react'
import Layout from 'themes/layouts/Login'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Form, Input } from 'antd'

import UserService from 'themes/services/api/UserService'
import to from 'await-to-js'
import useBaseHooks from 'themes/hooks/BaseHooks';

const Login = () => {
  const { t, getAuth, getPublicRuntimeConfig, notify } = useBaseHooks()
  const publicRuntimeConfig = getPublicRuntimeConfig()
  const auth = getAuth();

  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const userService = new UserService()
  const onFinish = async (values: any) => {

    setLoading(true)
    let [error, result]: any[] = await to(userService.login({ data: values }))
    setLoading(false)
    if (error) {
      return notify(t('message.loginFailed'), t(`errors:${error.code}`), 'error')
    }

    notify(t('message.loginSuccess'))
  }

  return <Layout>
    <div className="logo">
      <div className="img">
        <img src={publicRuntimeConfig.LOGO}></img>
      </div>
      <div className="sitename">{t('admincp')}</div>
    </div>
    <Form
      onFinish={onFinish}
      form={form}
      name="loginForm"
      layout="horizontal"
      initialValues={{
        username: "",
        password: "",
      }}
    >
      <Form.Item name="username" rules={[{ required: true, message: t('form.required') }]} >
        <Input placeholder={t('username')} prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: t('form.required') }]}>
        <Input.Password placeholder={t('password')} prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
      </Form.Item>
      <Form.Item>
        <Button className="btnLogin" type="primary" htmlType="submit" loading={loading}> {t('login')}</Button>
      </Form.Item>
    </Form>
  </Layout>
}

export default Login