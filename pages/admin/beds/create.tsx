import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, InputNumber, Radio } from 'antd';
import BedService from 'themes/services/api/BedService';
import RoomService from 'themes/services/api/RoomService';
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

const Create = ({ rooms }: { rooms: Room[] }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const bedService = new BedService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let [error, result]: any[] = await to(bedService.create(values));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.beds.index")
  }

  //render option
  const renderOption = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    rooms.map(item => {
      result.push(
        <Option value={item.code} key={item.code}>{item.code} - ({item.bedNumber} {t('bed')})</Option>
      )
    })
    return result;
  }
  
  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createBed"
        initialValues={{
          roomCode: undefined,
          bedId: "",
          status: "",
          note: ""
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t("room")}
          name="roomCode"
          rules={[
            { required: true, message: t('form.required')}
          ]}
        >
          <Select
            showSearch
            placeholder={t('placeholder.room')}
            filterOption={(input: any, option: any) => {
              return option.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0
            }}
          >
            {renderOption()}
          </Select>
        </Form.Item>

        <Form.Item
          label={t("beds.bedId")}
          name="bedId"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <InputNumber  style={{ width: "100%" }} min={1} />
        </Form.Item>

        <Form.Item
          label={t("status")}
          name="status"
        >
          <Radio.Group>
            <Radio value={0} key={0}>{t("beds.empty")}</Radio>
            <Radio value={1} key={1}>{t("beds.full")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={t("note")}
          name="note"
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
          <Button onClick={() => redirect("frontend.admin.beds.index")} style={{ marginRight: 8}}>
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
  const roomService = new RoomService(ctx)
  const [error, rooms] = await to(roomService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages','menu','errors'],
    error: error,
    rooms: _.get(rooms, "data", []),
  }
}
Create.permissions = {
  "admin.beds": "C"
};
export default Create