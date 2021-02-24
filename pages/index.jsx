import Link from 'next/link'
import {route} from 'themes/route'
import Layout from 'themes/layouts/Admin'
import { DatePicker, message } from 'antd';

const PostLink = (props) => (
 <li>
   <Link href="/login">
     <a>{props.title}</a>
   </Link>
 </li>
)

export default () => (
  <Layout>
    <h1>Dashboard</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit1"/>
      <DatePicker />
    </ul>
  </Layout>
)