import React from 'react';
import { Row, Col, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useBaseHook from 'themes/hooks/BaseHooks'
import useSWR from 'swr'
function numFormatter(num: number) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}
const Profile = () => {
    const { getCookies, redirect, t, getData, getAuth, getPublicRuntimeConfig } = useBaseHook()
    const auth = getAuth();
    const publicRuntimeConfig = getPublicRuntimeConfig()
    const profileInfo = {
        companyLogo: publicRuntimeConfig.LOGO,
        groupName: "Nhân viên",
        userFullname: "Diêm Thị Quỳnh",
        companyName: "Viện dưỡng lão Hướng Dương",
        companyAddress: "Số 39, ngõ 74, Đường Duy Tân, Quận Cầu Giấy, Hà Nội",
        today: {},
        
    }
    return <div className="sidebar-profile">
        <Row>
            <Col xs={24}>
                <div className="profile-avatar">
                    <Avatar size={80} icon={<UserOutlined />} src={profileInfo.companyLogo} className="avatar" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={24}>
                <div className="profile-companyName">{profileInfo.companyName}</div>
                <div className="profile-address">{profileInfo.companyAddress}</div>
            </Col>
            {/* <Col xs={24}>
                <div className="profile-userInfo">
                    <span className="profile-name">{profileInfo.userFullname}</span> - <span className="profile-groupName">{profileInfo.groupName}</span>
                </div>
            </Col> */}
        </Row>
        
        <Row>
            <Col xs={22} offset={1}>
                <Divider className="profile-endLine" />
            </Col>
        </Row>


    </div>
}

export default Profile