import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';

import React, { useState } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Row, Col, Form, Input, Select, Modal, InputNumber, Radio, DatePicker } from 'antd';
import PatientService from 'themes/services/api/PatientService';
import BedService from 'themes/services/api/BedService';
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

const Edit = ({ beds, patient, patientError }: { beds: Bed[], patient: Patient, patientError: any }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const patientService = new PatientService()
  const confirmRef = React.createRef<ConfirmDialog>()

  const { checkPermission } = usePermissionHook();
  const deletePer = checkPermission({
    "admin.patients": "D"
  })
  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }
  //submit form
  const onFinish = async (values: any): Promise<void> => {
    if(patientError) return DisplayError(patientError)
    setLoading(true)
    let [error, result]: any[] = await to(patientService.edit({
      id: patient.id,
      values
    }));
    setLoading(false)
    if(error) return DisplayError(error)
    notify(t("message.recordUpdated"))
    redirect("frontend.admin.patients.index")
  }

  const onDelete = async (): Promise<void> => {
    if(patientError) return DisplayError(patientError)
    let [error, result]: any[] = await to(patientService.delete({ ids: [patient.id] }));
    if(error) return DisplayError(error)
    notify(t('message.recordDeleted'))
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
          code: patient.code,
          fullname: patient.fullname,
          birthday: patient.birthday ? moment(patient.birthday).subtract(7,'h') : "",
          gender: patient.gender,
          address: patient.address,
          cardId: patient.cardId,
          phone: patient.phone,
          medicalHistory: patient.medicalHistory,
          dateIn: patient.dateIn ? moment(patient.dateIn).subtract(7,'h') : "",
          dateOut: patient.dateOut ? moment(patient.dateOut).subtract(7,'h') : "",
          bedId: patient.bedId
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

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button onClick={() => redirect("frontend.admin.patients.index")} style={{ marginRight: 8 }}>
            <LeftCircleFilled /> {t('cancel')}
          </Button>

          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
            <SaveFilled /> {t('submit')}
          </Button>
          
          <Button hidden={!deletePer} danger onClick={() => { 
              if (confirmRef.current) confirmRef.current.show(patient.id) 
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
  const patientService = new PatientService(ctx)
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

  let [patientError, patient] = await to(patientService.detail({ id: query.id }));
  if(patientError) patient = {}
  const [errorBed, beds] = await to(bedService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    error: error,
    patient: patient,
    patientError: patientError,
    beds: _.get(beds, "data", []),
  }
}
Edit.permissions = {
  "admin.patients": "U"
};
export default Edit