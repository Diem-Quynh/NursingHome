import React, { Fragment, createRef, useEffect, useState } from 'react';
import { Menu, Layout, Avatar, Button, Input, Popover, Row, Col, AutoComplete, Form, Modal } from 'antd';
import { 
  MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined, 
  SettingFilled, UserOutlined
} from '@ant-design/icons'
import ConfirmDialog from 'themes/components/Dialogs/ConfirmDialog';
import UserService from  "themes/services/api/UserService"
import PatientService from  "themes/services/api/PatientService"
import BedService from  "themes/services/api/BedService"
import useBaseHook from 'themes/hooks/BaseHooks'
import Cookies from 'universal-cookie'
import to from 'await-to-js'
import moment from 'moment'
import _ from 'lodash'

const { Header } = Layout;
const { SubMenu } = Menu
const { Search } = Input

const AdminHeader = (props: any) => {
  const { t, notify, redirect, setStore, getAuth, getStore, getCookies, getData  } = useBaseHook();
  const userService = new UserService()
  const patientService = new PatientService()
  const bedService = new BedService()
  const [patients, setPatients] = React.useState([])
  const [beds, setBeds] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [modalVisible, setModalVisible] = useState(false) // change password
  const auth = getAuth() || {};
  const cookieObject = getCookies()
  const confirmRef = createRef<ConfirmDialog>()
  const handleClickMenu = (e: any) => { }
  const redirectLogin = async () => {
    const cookies = new Cookies(cookieObject)
    await cookies.remove('token', { path: '/'})
    await cookies.remove('user', { path: '/'})
    return await redirect('frontend.admin.login')
  }
  useEffect(() => {
    if (!cookieObject.token || !cookieObject.user) {
      redirect('frontend.admin.login')
    }
  }, [])
  
  let optionsPatients: any = []
  let optionsBeds: any = []
  let optionsUsers: any = []
  
  const onChangeSearch = async (value: any) => {
    let filterPatients = {
      filters: [{
        field: "fullname",
        operator: "contains",
        value: value
      }],
      sorting: [],
      pageSize: 5,
      page: 0
    }
    let filterBeds = {
      filters: [{
        field: "roomCode",
        operator: "contains",
        value: value
      }],
      sorting: [],
      pageSize: 5,
      page: 0
    }
    let filterUsers = {
      filters: [{
        field: "fullname",
        operator: "contains",
        value: value
      }],
      sorting: [],
      pageSize: 5,
      page: 0
    }
    let [errUsers, users]: any[] = await to(userService.index(filterUsers))
    let dataUsers = _.get(users, "data", [])
    if(dataUsers.length){
      setUsers(dataUsers)
    }

    let [errPatients, patients]: any[] = await to(patientService.index(filterPatients))
    let dataPatients = _.get(patients, "data", [])
    if(dataPatients.length){
      setPatients(dataPatients)
    }

    let [errBeds, beds]: any[] = await to(bedService.index(filterBeds))
    let dataBeds = _.get(beds, "data", [])
    if(dataBeds.length){
      setBeds(dataBeds)
    }

    
    
  }
  const onBlurSearch = () => {
    setUsers([])
    setBeds([])
    setPatients([])
  }
  
  const renderConfirmDialog = () => {
    return (
      <ConfirmDialog
        ref={confirmRef}
        onSubmit={redirectLogin}
        title={t('signout')}
        content={t('message.signoutConfirm')}
      />
    )
  }

  const onChangePassword = async (data: any): Promise<void> => {
    console.log(data)
    setModalVisible(false)
    let values = { id: auth.id, oldPassword: data.oldPassword, password: data.password }

    let [error, result]: any[] = await to(userService.userUpdatePassword(values));
    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error')
    }

    notify(t("message.recordUpdated"))
  }

  //validate input password
  const validatorPassword = ({ getFieldValue }: { getFieldValue: Function }) => ({
    validator: (rule: any, value: any) => {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(t('form.rePassword'));
    }
  })

  const renderChangePassModal = () => {
    const [formChangePassword] = Form.useForm()
    return (<Form form={formChangePassword} name="formChangePassword"
      initialValues={{
        oldPassword: "",
        password: "",
        repassword: "",
      }}
      onFinish={onChangePassword}
    >
      <Modal
        closable={false}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => { formChangePassword.submit(); }}
      >
        <Form.Item
          label={t("oldPassword")}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          name="oldPassword"
          rules={[
            { required: true, message: t('form.required') }
          ]}
        >
          <Input.Password
            placeholder={t("oldPassword")}
            type="password"
            autoFocus={true}
          />
        </Form.Item>
        <Form.Item
          label={t("password")}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          name="password"
          rules={[
            { required: true, message: t('form.required') }
          ]}
        >
          <Input.Password
            placeholder={t("password")}
            type="password"
          />
        </Form.Item>
        <Form.Item
          label={t("rePassword")}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          name="repassword"
          rules={[
            { required: true, message: t('form.required') },
            validatorPassword
          ]}
        >
          <Input.Password
            placeholder={t("rePassword")}
          />
        </Form.Item>
      </Modal>
    </Form>
    )
  }

  const renderRightContent = () => {
    return <div>
      <Button icon={<PoweroffOutlined />} type="link" className="header-btn" onClick={() => { if (confirmRef.current) confirmRef.current.show() }}></Button>
      <Button icon={<SettingFilled spin />} type="link" className="header-btn"  onClick={() => { setModalVisible(true) }} ></Button>
    </div>
  }

  const { collapsed, onCollapseChange } = props
  const menuIconProps = {
    className: "trigger",
    onClick: () => onCollapseChange(!collapsed)
  }
  let headerClass = "header"
  if (collapsed) headerClass += ' collapsed'

  const accountPopup = () => {
    return <React.Fragment>
      <div style={{ width: "400px" }}>
        <Row gutter={[8, 8]}>
          <Col xs={12} md={7} lg={7}> 
            <div className="avatar">
              <Avatar 
                icon={<UserOutlined />} 
                src={""} size={100} shape="square">
                {auth.fullname}
              </Avatar>
              {/* <Avatar size={64} icon={<UserOutlined />} /> */}
            </div>
          </Col> 
          <Col xs={12} md={17} lg={17}>
            <Row>
              <b>{t('username')}</b>: <i>{auth.username}</i>
            </Row>
            <Row>
            <b>{t('fullname')}</b>: <i>{auth.fullname}</i>
            </Row>
            <Row>
              <b>{t('email')}</b>: <i>{auth.email ? auth.email : t("update")}</i>
            </Row>
            <Row>
              <b>{t('phone')}</b>: <i>{auth.phone ? auth.phone : t("update")}</i>
            </Row>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  };
  const renderTitle = (title: string) => {
    return (
      <span>
        {title}
        {/* <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          more
        </a> */}
      </span>
    );
  };
  const renderItem = (title: string, link: any) => {
    return {
      value: title,
      label: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {title}
          <span>
            {link}
          </span>
        </div>
      ),
    };
  };

  patients.map((item: any, index: number) => {
    optionsPatients.push(renderItem(
      `${item.fullname}`, 
      <a style={{ float: 'right' }} href={`patients/${item.id}/edit`} target="_blank" rel="noopener noreferrer"> Xem chi tiết </a>
    ))
  })
  beds.map((item: any, index: number) => {
    optionsBeds.push(renderItem(
      `${item.roomCode} - ${item.bedId}`, 
      <a style={{ float: 'right' }} href={`beds/${item.id}/edit`} target="_blank" rel="noopener noreferrer"> Xem chi tiết </a>
    ))
  })
  users.map((item: any, index: number) => {
    optionsUsers.push(renderItem(
      `${item.fullname} - ${item.username}`, 
      <a style={{ float: 'right' }} href={`users/${item.id}/edit`} target="_blank" rel="noopener noreferrer"> Xem chi tiết </a>
    ))
  })
 
  const options = [
    {
      label: renderTitle(t('patient')),
      options: optionsPatients,
    },
    {
      label: renderTitle(t('bed')),
      options: optionsBeds
    },
    {
      label: renderTitle(t('employee')),
      options: optionsUsers
    }
  ];

  const renderSearch = () => {
    return (
      <div style={{ height: "900px", display: 'inline' }}>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={350} // width dropdown
          onChange={(value: any) => onChangeSearch(value)}
          onBlur={() => onBlurSearch()}
          style={{ width: 350 }} // width input Search
          options={options}
          disabled = {props.disabledSearch? true : false } // disable input search
        >
          <Input.Search size="large" placeholder={t("search")} />
        </AutoComplete>
      </div>
    );
  };

  return <React.Fragment>
    <Header
      className={headerClass}>
      {collapsed 
      ? <MenuUnfoldOutlined style={{ color: "#fff" }} {...menuIconProps} /> 
      : <MenuFoldOutlined style={{ color: "#fff" }} {...menuIconProps} />}
      
      <Popover placement="bottom" title={t('personalInfo')} content={accountPopup()}>
        <Button icon={<UserOutlined />} type="link" className="header-btn"></Button>
      </Popover>
      
      {/* <Button icon={<BellOutlined />} type="link" className="header-btn"></Button> */}
      {/* <Search
        placeholder="Tìm kiếm..."
        onSearch={value => console.log(value)}
        className="header-search"
      /> */}
      {renderSearch()}
      <div className='rightContainer'>{renderRightContent()}</div>

    </Header>
    {renderConfirmDialog()}
    {renderChangePassModal()}
  </React.Fragment>
}

export default AdminHeader