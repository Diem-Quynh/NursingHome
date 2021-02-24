import Link from 'next/link'
import { route } from 'themes/route'
import Layout from 'themes/layouts/Admin'

import {
  AppstoreOutlined,
  ContactsOutlined,
  FileWordOutlined,
  MenuOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import { Button, Row, Col, Typography } from 'antd';
const { Title } = Typography
const PostLink = (props) => (
  <li>
    <Link href="/login">
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <div className="content">
      
    </div>
  </Layout>
)