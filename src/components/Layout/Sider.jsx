import {Menu} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {
    HeartOutlined,
    UserOutlined,
    BarChartOutlined,
    MonitorOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import '../../css/index.css'

const {SubMenu} = Menu;

const LeftMenu = () => (
    <Menu theme="dark" mode="inline" selectedKeys={`/${window.location.hash.split('#')[1].split('/')[1]}`}>
        <Menu.Item key="/" icon={<HeartOutlined/>}>
            <Link to={'/'}>欢迎</Link>
        </Menu.Item>
        <Menu.Item key="/splicingDetection" icon={<BarChartOutlined/>}>
            <Link to={'/splicingDetection'}>支持隐私保护的伪脸检测</Link>
        </Menu.Item>
        <Menu.Item key="/encryptedImagAnalysis" icon={<MonitorOutlined/>}>
            <Link to={'/encryptedImagAnalysis'}>加密人脸分析</Link>
        </Menu.Item>
        <Menu.Item key="/faceHistory" icon={<UnorderedListOutlined/>}>
            <Link to={'/faceHistory'}>历史检测记录</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined/>} title="个人帐号管理">
            <Menu.Item key="/profile">
                <Link to={'/profile'}>个人信息管理</Link>
            </Menu.Item>
            <Menu.Item key="/password">
                <Link to={'/password'}>帐号安全管理</Link>
            </Menu.Item>
        </SubMenu>
    </Menu>
)

export default LeftMenu
