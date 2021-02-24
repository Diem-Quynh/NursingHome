import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, InputNumber, Radio, DatePicker } from 'antd';
import PatientService from 'themes/services/api/PatientService';
import BedService from 'themes/services/api/BedService';
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

const Create = ({ beds }: { beds: Bed[] }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const patientService = new PatientService()
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    console.log(values)
    setLoading(true)
    let [error, result]: any[] = await to(patientService.create(values));
    setLoading(false)

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }
    notify(t("message.recordCreated"))
    redirect("frontend.admin.patients.index")
  }

  //render option
  const renderOption = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    beds.map(item => {
      result.push(
      <Option value={item.id} key={item.id}>{item.roomCode} - {item.bedId} - {item.status?t('beds.full'):t('beds.empty')}</Option>
      )
    })
    return result;
  }
  
  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        name="createPatient"
        initialValues={{
          code: "",
          fullname: "",
          birthday: "",
          gender: "",
          address: "",
          cardId: "",
          phone: "",
          medicalHistory: "",
          dateIn: "",
          dateOut: "",
          bedId: undefined
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
          label={t("fullname")}
          name="fullname"
          rules={[
            { required: true, message: t('form.required') },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("birthday")}
          name="birthday"
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("gender")}
          name="gender"
        >
          <Radio.Group>
            <Radio value={0} key={0}>{t("male")}</Radio>
            <Radio value={1} key={1}>{t("female")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={t("address")}
          name="address"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("cardId")}
          name="cardId"
          rules={[
            { pattern: /^[0-9]+$/g, message: t('form.number') },
            { max: 12, message: t('form.maxLength', { length: 12 }) }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("phone")}
          name="phone"
          rules={[
            { pattern: /^[0-9]+$/g, message: t('form.number') },
            { max: 12, message: t('form.maxLength', { length: 12 }) }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("patients.medicalHistory")}
          name="medicalHistory"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("patients.dateIn")}
          name="dateIn"
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("patients.dateOut")}
          name="dateOut"
        >
          <DatePicker format={'YYYY-MM-DD'} showTime={false} placeholder={t('placeholder.date')} />
        </Form.Item>

        <Form.Item
          label={t("bed")}
          name="bedId"
        >
          <Select
            showSearch
            placeholder={t('placeholder.bed')}
            filterOption={(input: any, option: any) => {
              return option.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0
            }}
          >
            {renderOption()}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
          <Button onClick={() => redirect("frontend.admin.patients.index")} style={{ marginRight: 8}}>
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
  const bedService = new BedService(ctx)
  const [error, beds] = await to(bedService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages','menu','errors'],
    error: error,
    beds: _.get(beds, "data", []),
  }
}
Create.permissions = {
  "admin.patients": "C",
  "receptionist.patients": "C"
};
export default Create