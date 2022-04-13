import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Form, input, Button, message} from 'antd';
import '../../css/test.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import cookie from "react-cookies";
import * as encrypt from '../../utils/base64'
import {actions as userActions} from "../../ducks/user";
import Base64 from "base-64";

const UserPassword =({password})=>{
    const onFinish = (values) => {

        values.oldPassword = Base64.encode(values.oldPassword);
        values.newPassword = Base64.encode(values.newPassword);
        values.confirmPwd = Base64.encode(values.confirmPwd);


        console.log('Received values of form: ', values);
        if(values.newPassword === values.confirmPwd){
            password(values)
        }else{
            message.warning("请确认两次输入的密码！");
        }

    };


    return (
        <Form
            className={"container "}
            onFinish={onFinish}
            size={"large"}
        >
        <Form.Item><h1>修改密码</h1></Form.Item>
        <Form.Item><br/></Form.Item>
            <Form.Item
                label={"原始密码"}
                name="oldPassword"
                rules={[
                    {
                        required: true,
                        message: '请输入原始密码！',
                    },
                ]}
            ><input placeholder={"请输入原始密码"} style={{width:300,height:25,fontSize:12}}/></Form.Item>

            <Form.Item
                label={<span >新的密码</span>}
                name="newPassword"
                rules={[
                    {
                        required: true,
                        message: '请输入新的密码！',
                    },
                ]}
            ><input placeholder={"请输入新的密码"} type={"password"} style={{width:300,height:25,fontSize:12}}/></Form.Item>
            <Form.Item
                label={"确认密码"}
                name="confirmPwd"
                rules={[
                    {
                        required: true,
                        message: '请再次输入新的密码！',
                    },
                ]}
            ><input placeholder={"请再次输入新的密码" } type={"password"} style={{width:300,height:25,fontSize:12}}/></Form.Item>
            <Form.Item><Button type="primary" htmlType="submit" style={{backgroundColor:"#999999" ,color:"gray",borderColor:"#999999"}}>修改</Button></Form.Item>
        </Form>
    );
}
const mapDispatchToProps = dispatch => ({
    password: (data) => dispatch(userActions.password(data)),
});
export default connect(null, mapDispatchToProps)(withRouter(UserPassword))
