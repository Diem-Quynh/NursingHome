import React, { useState, Component } from 'react'
import Layout from 'themes/layouts/Admin'
import { Button, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import HealthService from 'themes/services/api/HealthStatusService';
import PatientService from 'themes/services/api/PatientService';
import _ from 'lodash';
import to from 'await-to-js'
import useBaseHook from 'themes/hooks/BaseHooks'
import { RightCircleFilled } from '@ant-design/icons';
// import { TimelineChart } from 'ant-design-pro/lib/Charts';
// import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const { RangePicker } = DatePicker;
import moment from 'moment'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 9 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};

interface bloodPressureChar {
    x: number,
    y1: number,
    y2: number
}

const Statistic = ({ patients }: { patients: Patient[] }) => {
  const { t, notify, redirect, setStore, getAuth, getStore } = useBaseHook();
  const [loading, setLoading] = useState(false);
  const [bloodPressure, setbloodPressure] = useState([{x:1000,y1:100,y2:100}]);
  const [form] = Form.useForm();
  const healthService = new HealthService()

  const DisplayError = (err: any) => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error')
  }

  const getBloodPressure = (param: string) => {
    let blood = {bloodPressureUpper: '', bloodPressureLower: ''}
    if(param) {
      const index = param.indexOf('/')
      const bloodPressureUpper = param.slice(0,index)
      const bloodPressureLower = param.slice(index + 1)
      blood = {bloodPressureUpper: bloodPressureUpper, bloodPressureLower: bloodPressureLower}
    }
    return blood
  }

  //submit form
  const onFinish = async (values: any): Promise<void> => {
    setLoading(true)
    const dateStart = moment(values.date[0]).startOf("days").add(14,'h').toISOString()
    const dateEnd = moment(values.date[1]).startOf("days").add(14,'h').toISOString()
    const filterPatient = JSON.stringify({field:"patientId",operator:"=",value:values.patientId})
    const filterDate = JSON.stringify({field:"date",operator:"between",value:[dateStart, dateEnd]})
    const sorter = JSON.stringify({field:"date", direction:"asc"})
    setLoading(false)
    const [error, result] = await to(healthService.index({ pageSize: -1, filters: [filterPatient, filterDate], sorting: [sorter] }));
    if(error) return DisplayError(error)
    if(!_.isEmpty(result.data)) {
        let healths: bloodPressureChar[] = []
        result.data.map((item: any) => {
            let blood = getBloodPressure(item.bloodPressure)
            healths.push({x: new Date(item.date).getTime(), y1: Number(blood.bloodPressureUpper), y2: Number(blood.bloodPressureLower)})
        })
        setbloodPressure(healths)
    }
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

    /* //   render chart Blood pressure
    const renderChartBloodPressure = () => {
        if((bloodPressure.length)>0)
            return <TimelineChart height={200} data={bloodPressure} titleMap={{ y1: t('healthStatuses.upperIndex'), y2: t('healthStatuses.lowerIndex') }} />
        return <div></div>
    } */


  return <Layout>
    <div className="content">
      <Form
        {...formItemLayout}
        form={form}
        layout="inline"
        name="statisticHealth"
        initialValues={{
          patientId: undefined,
          date: "",
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
          <RangePicker format={'YYYY-MM-DD'} showTime={false} />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
          {t('statistic')} <RightCircleFilled /> 
          </Button>
        </Form.Item>
      </Form>
      {/* <TimelineChart height={200} data={bloodPressure} titleMap={{ y1: t('healthStatuses.upperIndex'), y2: t('healthStatuses.lowerIndex') }} /> */}
      {/* {renderChartBloodPressure()} */}

      {/* <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> */}
    </div>
  </Layout>
}

Statistic.getInitialProps = async (ctx: any) => {
  const patientService = new PatientService(ctx)

  const [errorPatient, patients] = await to(patientService.index({ pageSize: -1 }));
  return {
    namespacesRequired: ['common', 'pages', 'menu','errors'],
    patients: _.get(patients, "data", [])
  }
}
Statistic.permissions = {
  "admin.healthStatuses": "U"
};
export default Statistic