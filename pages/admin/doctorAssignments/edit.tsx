import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Modal, InputNumber, Radio, DatePicker } from 'antd';
import DoctorAssignService from 'themes/services/api/DoctorAssignmentService';
import RoomService from 'themes/services/api/RoomService';
import UserService from 'themes/services/api/UserService';
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

const Edit = ({ rooms, users, doctorAssign, doctorAssignError }: 
  { rooms: Room[], users : User[], doctorAssign: DoctorAssignment, doctorAssignError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const doctorAssignService = new DoctorAssignService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.doctorAssignments": "D"
  })

  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(doctorAssignError) return DisplayError(doctorAssignError)
    setLoading(true)
    let [error, result]: any[] = await to(doctorAssignService.edit({
      id: doctorAssign.id,
      values
    }));
    setLoading(false)
    if(error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.doctorAssignments.index")
  }

  const onDelete = async (): Promise<void> => {
    if(doctorAssignError) return DisplayError(doctorAssignError)
    let [error, result]: any[] = await to(doctorAssignService.delete({ ids: [doctorAssign.id] }));
    if(error) return DisplayError(error)
    notify(t('message.recordDeleted'))
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
        name="createPatient"
        initialValues={{
          doctorId: doctorAssign.doctorId,
          roomCode: doctorAssign.roomCode,
          dateBegin: doctorAssign.dateBegin ? moment(doctorAssign.dateBegin).subtract(7,'h') : "",
          dateEnd: doctorAssign.dateEnd ? moment(doctorAssign.dateEnd).subtract(7,'h') : "",
          note: doctorAssign.note
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
            filterOption={ (input: any, option: any) => {
              return option.children[2].toLowerCase().indexOf(input.toLowerCase()) >= 0
            } }
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

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => redirect("frontend.admin.doctorAssignments.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          
          <Button hidden={!deletePer} danger onClick={() => { 
              if (confirmRef.current) confirmRef.current.show(doctorAssign.id) 
            }}>
            <DeleteFilled /> {t('deleteItem')}
          </Button>
         
        </Form.Item>
      </Form>
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Edit.getInitialProps = async (ctx: any) => {
  const doctorAssignService = new DoctorAssignService(ctx)
  const roomService = new RoomService(ctx)
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

  let [doctorAssignError, doctorAssign] = await to(doctorAssignService.detail({ id: query.id }));
  if(doctorAssignError) doctorAssign = {}
  const [errorRoom, rooms] = await to(roomService.index({ pageSize: -1 }));
  const filters = JSON.stringify({field:"position",operator:"contains",value:"Bác sỹ"})
  const [errorUsers, users] = await to(userService.index({ pageSize: -1, filters: [filters] }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    doctorAssign: doctorAssign,
    doctorAssignError: doctorAssignError,
    rooms: _.get(rooms, "data", []),
    users: _.get(users, "data", [])
  }
}
Edit.permissions = {
  "admin.doctorAssignments": "U"
};
export default Edit