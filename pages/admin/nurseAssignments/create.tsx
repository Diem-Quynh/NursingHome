import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, InputNumber, Radio, DatePicker } from 'antd';
import PatientService from 'themes/services/api/PatientService';
import UserService from 'themes/services/api/UserService';
import NurseAssignService from 'themes/services/api/NurseAssignmentService';
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
  const nurseAssignService = new NurseAssignService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    console.log(values)
    setLoading(true)
    let [error, result]: any[] = await to(nurseAssignService.create(values));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
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
  
  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createNurseAssign"
        initialValues={{
          nurseId: undefined,
          patientId: undefined,
          dateBegin: "",
          dateEnd: "",
          note: ""
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

        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
          <Button onClick={() => redirect("frontend.admin.nurseAssignments.index")} style={{ marginRight: 8}}>
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
  const filters = JSON.stringify({field:"position",operator:"contains",value:"Hộ lý"})
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
  "admin.nurseAssignments": "C"
};
export default Create