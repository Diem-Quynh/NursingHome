import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


class Login extends React.Component {
  render() {
    return (<Layout>
      <Head>
        <title>{this.props.title || ""}</title>
      </Head>
        <div id="login">
          <Content className="content">
              {this.props.children}
          </Content>
        </div>
    </Layout>
    );
  }
}


export default Login;