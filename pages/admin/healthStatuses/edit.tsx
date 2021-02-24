import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import HealthService from 'themes/services/api/HealthStatusService';
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

const Edit = ({ patients, users, health, healthError }: { patients: Patient[], users : User[], health: HealthStatus, healthError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const healthService = new HealthService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.healthStatuses": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }

  const bloodPressure = (param: string) => {
    let blood = {bloodPressureUpper: '', bloodPressureLower: ''}
    if(param) {
      const index = health.bloodPressure.indexOf('/')
      const bloodPressureUpper = health.bloodPressure.slice(0,index)
      const bloodPressureLower = health.bloodPressure.slice(index + 1)
      blood = {bloodPressureUpper: bloodPressureUpper, bloodPressureLower: bloodPressureLower}
    }
    return blood
  }
  const blood = bloodPressure(health.bloodPressure)

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(healthError) return DisplayError(healthError)
    setLoading(true)
    let { bloodPressureUpper, bloodPressureLower, ...otherValues } = values;
    let bloodPressure = bloodPressureUpper.toString() + "/" + bloodPressureLower.toString()
    const params = Object.assign(otherValues,{bloodPressure: bloodPressure})
    let [error, result]: any[] = await to(healthService.edit({
      id: health.id,
      params
    }));
    setLoading(false)
    if(error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.healthStatuses.index")
  }

  const onDelete = async (): Promise<void> => {
    if(healthError) return DisplayError(healthError)
    let [error, result]: any[] = await to(healthService.delete({ ids: [health.id] }));
    if(error) return DisplayError(error)
    notify(t('message.recordDeleted'))
    redirect("frontend.admin.healthStatuses.index")
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
          patientId: health.patientId,
          date: health.date ? moment(health.date).subtract(7,'h') : "",
          weight: health.weight,
          bloodPressureUpper: blood.bloodPressureUpper,
          bloodPressureLower: blood.bloodPressureLower,
          bloodSugar: health.bloodSugar,
          heartRate: health.heartRate,
          doctorId: health.doctorId,
          note: health.note
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
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
          label={t("healthStatuses.date")}
          name="date"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("healthStatuses.weight") + ' (Kg)'}
          name="weight"
        >
          <InputNumber min={0} max={300} step={0.1}  style={{ width:'100%' }} />
        </Form.Item>

        {/* <Form.Item
          label={t("healthStatuses.bloodPressure") + " (mmHg)"}
          name="bloodPressure"
        >
          <Input />
        </Form.Item> */}

        <Form.Item label={t("healthStatuses.bloodPressure") + " (mmHg)"}>
          <Form.Item
            name="bloodPressureUpper"
            style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
          >
            <InputNumber />
          </Form.Item>

          <span style={{ padding:"0 50px", fontSize:"25px"  }}>/</span>

          <Form.Item
            name="bloodPressureLower"
            style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}
          >
            <InputNumber />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label={t("healthStatuses.bloodSugar") + " (mg/dL)"}
          name="bloodSugar"
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label={t("healthStatuses.heartRate") + " (BPM)"}
          name="heartRate"
        >
          <InputNumber />
        </Form.Item>

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
          label={t("note")}
          name="note"
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => redirect("frontend.admin.healthStatuses.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          
          <Button hidden={!deletePer} danger onClick={() => { 
              if (confirmRef.current) confirmRef.current.show(health.id) 
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
  const healthService = new HealthService(ctx)
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

  let [healthError, health] = await to(healthService.detail({ id: query.id }));
  if(healthError) health = {}
  const [errorPatient, patients] = await to(patientService.index({ pageSize: -1 }));
  const filters = JSON.stringify({field:"position",operator:"contains",value:"Bác sỹ"})
  const [errorUsers, users] = await to(userService.index({ pageSize: -1, filters: [filters] }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    health: health,
    healthError: healthError,
    patients: _.get(patients, "data", []),
    users: _.get(users, "data", [])
  }
}
Edit.permissions = {
  "admin.healthStatuses": "U"
};
export default Edit