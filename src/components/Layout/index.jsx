import {Layout, Menu} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import '../../css/index.css'
import LeftMenu from "../Layout/Sider";
import img from '../../images/faceDetection.png'
import styled from "styled-components";

const {Header, Sider, Content} = Layout;

const Logo = styled('div')`
    .logo{
        width:100px;
        height:100px;
    }
    color:white;
    display:flex;
    font-size:25px;
    flex-direction:column;
    margin:20px 20px 30px 20px;
    justify-content: center;
    align-items:center;
`

class FaceLayout extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
                <Sider trigger={null}
                       collapsible
                       collapsed={this.state.collapsed}
                       style={{
                           overflow: 'auto',
                           left: 0,
                           minHeight:'100vh'
                       }}>
                    <Logo>
                        <img src={img} alt={'logo'} className="logo"/>
                        <div>图像取证系统</div>
                    </Logo>
                    <LeftMenu/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 10}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

// 定义输出接口
export default withRouter(FaceLayout);
