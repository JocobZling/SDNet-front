import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HeartOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

module.exports = [{
    name: '个人帐号管理',
    href: '/user',
    isShow: !window.localStorage.getItem('userName'),// 展示条件 未登录时显示
    icon:'<UserOutlined />',
    sumMenu: [{
        name: '个人信息管理',
        href: '/profile'
    }, {
        name: '帐号安全管理',
        href: '/safe'
    }]
}, {
    name: '人脸图片检测',
    href: '/detection',
    isShow: !window.localStorage.getItem('userName') // 展示条件 未登录时显示
}, {
    name: '近期历史记录',
    href: '/history',
    isShow: !window.localStorage.getItem('userName') // 展示条件 未登录时显示
}]
