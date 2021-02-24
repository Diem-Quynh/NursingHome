import React, { useState, useEffect } from "react";
import { Layout, Drawer, BackTop, Row, Col, Typography } from "antd";

import Sidebar from "./admin/Sidebar";
import Header from "./admin/Header";
const THEME = "light";
import BreadCrumb from "themes/components/Breadcumb";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import useBaseHooks from "themes/hooks/BaseHooks";
import _routes from "themes/_routes.json";
import Head from 'next/head';
import moment from 'moment'


const { Title, Text } = Typography;

const { Content, Footer } = Layout;

const Admin = (props: any) => {
  const { router, t } = useBaseHooks();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { getPublicRuntimeConfig } = useBaseHooks();
  const publicRuntimeConfig = getPublicRuntimeConfig();

  const onCollapseChange = (value: boolean) => {
    console.log(value);
    setCollapsed(value);
  };
  const updateSize = () => {
    const mobile = window.innerWidth < 992;
    setIsMobile(mobile);
    setCollapsed(false);
  };

  useEffect(() => {});

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getRouteName = () => {
    const routePath = router.pathname;
    const routeData: any = _routes;
    for (let routeName in routeData) {
      let routeElement = routeData[routeName];
      if (!routeElement.action) continue;
      if (routeElement.action.substr(5) === routePath) return routeName;
    }
  };
  const routeName = getRouteName() || "";
  // console.log(routeName)

  return (
  <React.Fragment>
    <Head>
      <title>{publicRuntimeConfig.SITE_NAME}</title>
      <meta property="og:title" content={publicRuntimeConfig.TITLE} />
      <meta property="og:description" content={publicRuntimeConfig.DESCRIPTION}/>
      <meta property="og:image" content={publicRuntimeConfig.LOGO} />
      <link rel="nursing-home-icon" href={publicRuntimeConfig.LOGO}></link>
    </Head>
    <div id="admin">
      <Layout hasSider={true}>
        {isMobile ? (
          <Drawer
            maskClosable
            closable={false}
            destroyOnClose={true}
            onClose={() => onCollapseChange(false)}
            visible={collapsed}
            placement="left"
            bodyStyle={{
              padding: 0,
              height: "100vh",
            }}
          >
            <Sidebar
              className="slider"
              collapsed={false}
              onCollapseChange={onCollapseChange}
              theme={THEME}
              isMobile={isMobile}
            />
          </Drawer>
        ) : (
          <Sidebar
            className="slider"
            collapsed={collapsed}
            onCollapseChange={onCollapseChange}
            theme={THEME}
            isMobile={isMobile}
          />
        )}

        <Layout>
          <div id="primaryLayout"></div>

          <Content className={`main-layout ${collapsed ? "collapsed" : ""}`}>
            <Header collapsed={collapsed} onCollapseChange={onCollapseChange} disabledSearch={props.disabledSearch} />
            <div className="breadcumbs">
              <Row>
                <Col xs={24} lg={12} xl={15}>
                  <Title level={4}>
                    {props.title ||
                      t(
                        `pages:${routeName.replace(
                          "frontend.admin.",
                          ""
                        )}.title`
                      )
                    }
                  </Title>
                  <Text>
                    {props.description ||
                      t(
                        `pages:${routeName.replace(
                          "frontend.admin.",
                          ""
                        )}.description`
                      )
                    }
                  </Text>
                </Col>
                <Col xs={24} lg={12} xl={9}>
                  <div className="breadcumb-right">
                    <BreadCrumb />
                  </div>
                </Col>
              </Row>
            </div>
            {props.children}
          </Content>
          <Footer className="footer">© {moment().year()} Hactech</Footer>
          <BackTop
            className={"backTop"}
            target={() =>
              document.querySelector("#primaryLayout") as HTMLElement
            }
          />
        </Layout>
      </Layout>
    </div>
  </React.Fragment>

)};
export default Admin;
