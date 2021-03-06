import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Typography, InputNumber } from 'antd';
import RoomService from 'themes/services/api/RoomService';
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


const Create = () => {
  const { t, notify, redirect, router } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const roomService = new RoomService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let [error, result]: any[] = await to(roomService.create(values));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.rooms.index")
  }

  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createRoom"
        initialValues={{
          code: "",
          bedNumber: 0,
          note: "",
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t("code")}
          name="code"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("rooms.bedNumber")}
          name="bedNumber"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <InputNumber style={{ width: "100%" }} min={0} max={100} />
        </Form.Item>
        <Form.Item
          label={t("note")}
          name="note"
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
        </Form.Item>
      </Form>
    </div>
  </Layout>
}

Create.getInitialProps = async (ctx: any) => {
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors']
  }
}
Create.permissions = {
  "admin.rooms": "C"
}
export default Create