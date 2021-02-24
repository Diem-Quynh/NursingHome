import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Modal, InputNumber } from 'antd';
import RoomService from 'themes/services/api/RoomService';
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

const Edit = ({ room, roomError }: { room: Room, roomError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const roomService = new RoomService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.rooms": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(roomError) return DisplayError(roomError)
    setLoading(true)
    let [error, result]: any[] = await to(roomService.edit({
      id: room.id,
      values
    }));
    setLoading(false)
    if(error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.rooms.index")
  }

  const onDelete = async (): Promise<void> => {
    if(roomError) return DisplayError(roomError)
    let [error, result]: any[] = await to(roomService.delete({ ids: [room.id] }));
    if(error) return DisplayError(error)
    notify(t('message.recordDeleted'))
    redirect("frontend.admin.rooms.index")
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
        name="createRoom"
        initialValues={{
          code: room.code,
          bedNumber: room.bedNumber,
          note: room.note
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
          <Button onClick={() => redirect("frontend.admin.rooms.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          <Button hidden={!deletePer} danger onClick={() => { if (confirmRef.current) confirmRef.current.show(room.id) }}>
            <DeleteFilled /> {t('deleteItem')}
          </Button>
         
        </Form.Item>
      </Form>
      {renderDeleteDialog()}
    </div>
  </Layout>
}

Edit.getInitialProps = async (ctx: any) => {
  const roomService = new RoomService(ctx)
  const query = ctx.query;
  let error: any;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    }
  }

  let [roomError, room] = await to(roomService.detail({ id: query.id }));
  if(roomError) room = {}
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    room: room,
    roomError: roomError
  }
}
Edit.permissions = {
  "admin.rooms": "U"
};
export default Edit