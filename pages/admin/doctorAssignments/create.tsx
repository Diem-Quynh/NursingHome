import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, InputNumber, Radio, DatePicker } from 'antd';
import RoomService from 'themes/services/api/RoomService';
import UserService from 'themes/services/api/UserService';
import DoctorAssignService from 'themes/services/api/DoctorAssignmentService';
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

const Create = ({ rooms, users }: { rooms: Room[], users: User[] }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const doctorAssignService = new DoctorAssignService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let [error, result]: any[] = await to(doctorAssignService.create(values));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.doctorAssignments.index")
  }

  //render option
  const renderOptionRoom = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    rooms.map(item => {
      result.push(
      <Option value={item.code} key={item.code}>{item.code}</Option>
      )
    })
    return result;
  }

  const renderOptionUser = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    users.map(item => {
      result.push(
      <Option value={item.id} key={item.id}>{item.code} - {item.fullname}</Option>
      )
    })
    return result;
  }

  // filter option
  const filterOptionUser = (input: any, option: any) => {
    return option.children[2].toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  
  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createDoctorAssign"
        initialValues={{
          doctorId: undefined,
          roomCode: undefined,
          dateBegin: "",
          dateEnd: "",
          note: ""
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t("doctor")}
          name="doctorId"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Select 
            showSearch
            placeholder = {t('placeholder.user')}
            filterOption={ filterOptionUser }
          >
            {renderOptionUser()}
          </Select>
        </Form.Item>

        <Form.Item
          label={t("room")}
          name="roomCode"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Select 
            showSearch 
            placeholder = {t('placeholder.room')}
          >
            {renderOptionRoom()}
          </Select>
        </Form.Item>

        <Form.Item
          label={t("doctorAssignments.dateBegin")}
          name="dateBegin"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("doctorAssignments.dateEnd")}
          name="dateEnd"
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("note")}
          name="note"
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
          <Button onClick={() => redirect("frontend.admin.doctorAssignments.index")} style={{ marginRight: 8}}>
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
  const userService = new UserService(ctx)
  const [errorRooms, rooms] = await to(roomService.index({ pageSize: -1 }));
  const filters = JSON.stringify({field:"position",operator:"contains",value:"Bác sỹ"})
  const [errorUsers, users] = await to(userService.index({ pageSize: -1, filters: [filters] }));
  return {
    namespacesRequired: ['common', 'pages','menu','errors'],
    errorRooms: errorRooms,
    errorUsers: errorUsers,
    rooms: _.get(rooms, "data", []),
    users: _.get(users, "data", []),
  }
}
Create.permissions = {
  "admin.doctorAssignments": "C"
};
export default Create