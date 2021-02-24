import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Form, Input, Select, DatePicker } from 'antd';
import NurseAssignService from 'themes/services/api/NurseAssignmentService';
import PatientService from 'themes/services/api/PatientService';
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

const Edit = ({ patients, users, nurseAssign, nurseAssignError }: 
  { patients: Patient[], users : User[], nurseAssign: NurseAssignment, nurseAssignError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const nurseAssignService = new NurseAssignService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.nurseAssignments": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(nurseAssignError) return DisplayError(nurseAssignError)
    setLoading(true)
    let [error, result]: any[] = await to(nurseAssignService.edit({
      id: nurseAssign.id,
      values
    }));
    setLoading(false)
    if(error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.nurseAssignments.index")
  }

  const onDelete = async (): Promise<void> => {
    if(nurseAssignError) return DisplayError(nurseAssignError)
    let [error, result]: any[] = await to(nurseAssignService.delete({ ids: [nurseAssign.id] }));
    if(error) return DisplayError(error)
    notify(t('message.recordDeleted'))
    redirect("frontend.admin.nurseAssignments.index")
  }

  //render option
  const renderOptionPatient = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    patients.map(item => {
      result.push(
      <Option value={item.id} key={item.id}>{item.code} - {item.fullname} - {item.roomCode} - {item.bedCode}</Option>
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
          nurseId: nurseAssign.nurseId,
          patientId: nurseAssign.patientId,
          dateBegin: nurseAssign.dateBegin ? moment(nurseAssign.dateBegin).subtract(7,'h') : "",
          dateEnd: nurseAssign.dateEnd ? moment(nurseAssign.dateEnd).subtract(7,'h') : "",
          note: nurseAssign.note
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t("nurse")}
          name="nurseId"
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
          label={t("patient")}
          name="patientId"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Select
            showSearch
            placeholder = {t('placeholder.patient')}
            filterOption={ (input: any, option: any) => {
              return option.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0
            } }
          >
            {renderOptionPatient()}
          </Select>
        </Form.Item>

        <Form.Item
          label={t("nurseAssignments.dateBegin")}
          name="dateBegin"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("nurseAssignments.dateEnd")}
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
          <Button onClick={() => redirect("frontend.admin.nurseAssignments.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          
          <Button hidden={!deletePer} danger onClick={() => { 
              if (confirmRef.current) confirmRef.current.show(nurseAssign.id) 
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
  const nurseAssignService = new NurseAssignService(ctx)
  const patientService = new PatientService(ctx)
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

  let [nurseAssignError, nurseAssign] = await to(nurseAssignService.detail({ id: query.id }));
  if(nurseAssignError) nurseAssign = {}
  const [errorPatient, patients] = await to(patientService.index({ pageSize: -1 }));
  const filters = JSON.stringify({field:"position",operator:"contains",value:"Hộ lý"})
  const [errorUsers, users] = await to(userService.index({ pageSize: -1, filters: [filters] }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    nurseAssign: nurseAssign,
    nurseAssignError: nurseAssignError,
    patients: _.get(patients, "data", []),
    users: _.get(users, "data", [])
  }
}
Edit.permissions = {
  "admin.nurseAssignments": "U"
};
export default Edit