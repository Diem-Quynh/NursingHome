import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, InputNumber, Radio, DatePicker } from 'antd';
import PatientService from 'themes/services/api/PatientService';
import UserService from 'themes/services/api/UserService';
import HealthService from 'themes/services/api/HealthStatusService';
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

const Create = ({ patients, users }: { patients: Patient[], users: User[] }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const healthService = new HealthService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    let { bloodPressureUpper, bloodPressureLower, ...otherValues } = values;
    let bloodPressure = bloodPressureUpper.toString() + "/" + bloodPressureLower.toString()
    let [error, result]: any[] = await to(healthService.create(Object.assign(otherValues,{bloodPressure: bloodPressure})));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
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
  
  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createHealth"
        initialValues={{
          patientId: undefined,
          date: "",
          weight: "",
          bloodPressureUpper: "",
          bloodPressureLower: "",
          bloodSugar: "",
          heartRate: "",
          doctorId: undefined,
          note: ""
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

        <Form.Item label={t("healthStatuses.bloodPressure") + " (mmHg)"} style={{ width: 'calc(100% - 0px)' }}>
          <Form.Item
            name="bloodPressureUpper"
            style={{ display: 'inline-block', width: 'calc(20% - 0px)' }}
            rules={[
              { required: true, message: t('form.required') },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <span style={{ padding:"0 50px", fontSize:"25px"  }}>/</span>

          <Form.Item
            name="bloodPressureLower"
            style={{ display: 'inline-block', width: 'calc(20% - 0px)' }}
            rules={[
              { required: true, message: t('form.required') },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label={t("healthStatuses.bloodSugar") + " (mg/dL)"}
          name="bloodSugar"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label={t("healthStatuses.heartRate") + " (BPM)"}
          name="heartRate"
          rules={[
            { required: true, message: t('form.required') },
          ]}
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

        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
          <Button onClick={() => redirect("frontend.admin.healthStatuses.index")} style={{ marginRight: 8}}>
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
  const patientService = new PatientService(ctx)
  const userService = new UserService(ctx)
  const [errorPatients, patients] = await to(patientService.index({ pageSize: -1 }));
  const filters = JSON.stringify({field:"position",operator:"contains",value:"Bác sỹ"})
  const [errorUsers, users] = await to(userService.index({ pageSize: -1, filters: [filters] }));
  return {
    namespacesRequired: ['common', 'pages','menu','errors'],
    errorPatients: errorPatients,
    errorUsers: errorUsers,
    patients: _.get(patients, "data", []),
    users: _.get(users, "data", []),
  }
}
Create.permissions = {
  "doctor.healthStatuses": "C"
};
export default Create