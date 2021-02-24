import Layout from 'themes/layouts/Admin'
import _ from 'lodash'
import React from 'react';
import useBaseHook from "themes/hooks/BaseHooks";
import {
  SettingOutlined,
  LayoutOutlined,
  UserOutlined,
  ScheduleOutlined,
  CalendarOutlined,
  InsertRowRightOutlined
} from '@ant-design/icons';

import { Button, Row, Col, Typography } from 'antd';
const { Title } = Typography

import { Tabs, Divider } from 'antd';
const { TabPane } = Tabs;

const Index = () => {
  const { t, redirect } = useBaseHook();

  return <Layout>
    <div className="content" /* style={{ height: "80vh", position: "relative"}} */>
      <div className="dashboard">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={6} md={3} style={{ textAlign: "center" }}  onClick={() => redirect("frontend.admin.users.index")}>
              <UserOutlined style={{ fontSize: '30px' }}/>
              <Title level={4}>Nhân viên</Title>
            </Col>
            <Col xs={6} md={3} style={{ textAlign: "center" }} onClick={() => redirect("frontend.admin.patients.index")}>
              <UserOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Bệnh nhân</Title>
            </Col>
            <Col xs={6} md={3} style={{ textAlign: "center" }}  onClick={() => redirect("frontend.admin.rooms.index")}>
              <InsertRowRightOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Phòng bệnh</Title>
            </Col>
            <Col xs={6} md={3} style={{ textAlign: "center" }}  onClick={() => redirect("frontend.admin.beds.index")}>
              <LayoutOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Giường bệnh</Title>
            </Col>
          </Row>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={6} md={3} style={{ textAlign: "center" }}  onClick={() => redirect("frontend.admin.doctorAssignments.index")}>
              <ScheduleOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Phân công bác sỹ</Title>
            </Col>
            <Col xs={6} md={3} style={{ textAlign: "center" }}  onClick={() => redirect("frontend.admin.nurseAssignments.index")}>
              <ScheduleOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Phân công hộ lý</Title>
            </Col>
            <Col xs={6} md={3} style={{ textAlign: "center" }}  onClick={() => redirect("frontend.admin.healthStatuses.index")}>
              <CalendarOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Theo dõi sức khỏe</Title>
            </Col>
            <Col xs={6} md={3} style={{ textAlign: "center" }}>
              <SettingOutlined style={{ fontSize: '30px' }} />
              <Title level={4}>Cài đặt</Title>
            </Col>
          </Row>
        </div>
    </div>
  </Layout>
}

export default Index