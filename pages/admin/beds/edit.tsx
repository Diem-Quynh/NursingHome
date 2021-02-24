import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Modal, InputNumber, Radio } from 'antd';
import BedService from 'themes/services/api/BedService';
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

const Edit = ({ rooms, bed, bedError }: { rooms: Room[], bed: Bed, bedError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const bedService = new BedService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.beds": "D"
  })

  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(bedError) return DisplayError(bedError)
    setLoading(true)
    let [error, result]: any[] = await to(bedService.edit({
      id: bed.id,
      values
    }));
    setLoading(false)
    if(error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.beds.index")
  }

  const onDelete = async (): Promise<void> => {
    if(bedError) return DisplayError(bedError)
    let [error, result]: any[] = await to(bedService.delete({ ids: [bed.id] }));
    if(error) return DisplayError(error)
    notify(t('message.recordDeleted'))
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
        name="createBed"
        initialValues={{
          roomCode: bed.roomCode,
          bedId: bed.bedId,
          status: bed.status,
          note: bed.note
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

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => redirect("frontend.admin.beds.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          
          <Button hidden={!deletePer} danger onClick={() => { 
              if (confirmRef.current) confirmRef.current.show(bed.id) 
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
  const roomService = new RoomService(ctx)
  const bedService = new BedService(ctx)
  const query = ctx.query;
  let error: any;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    }
  }

  let [bedError, bed] = await to(bedService.detail({ id: query.id }));
  if(bedError) bed = {}
  const [errorRoom, rooms] = await to(roomService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    bedError: bedError,
    bed: bed,
    rooms: _.get(rooms, "data", []),
  }
}
Edit.permissions = {
  "admin.beds": "U"
};
export default Edit