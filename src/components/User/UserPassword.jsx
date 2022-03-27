import React from 'react';
import {UserOutlined, LockOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Form, Input, Button,Divider } from 'antd';
import  { KeyOutlined } from '@ant-design/icons';
import '../../css/userrInfo.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import cookie from "react-cookies";
import * as encrypt from '../../utils/base64'
import {actions as userActions} from "../../ducks/user";

const UserPassword =({password})=>{
    const onFinish = (values) => {
        console.log("success");
        if(values.remember){
            var oldPassword = encrypt.base64encode(values.oldPaIssword);
            var newPassword = encrypt.base64encode(values.newPassword);
            var confirmPwd = encrypt.base64encode(values.confirmPwd);
            let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);//一天
            cookie.save('oldPassword', oldPassword, { expires: inFifteenMinutes });
            cookie.save('newPassword', newPassword, { expires: inFifteenMinutes });
            cookie.save('confirmPwd', confirmPwd, { expires: inFifteenMinutes });


        }else{
            cookie.remove('oldPassword');
            cookie.remove('newPassword');
            cookie.remove('confirmPwd');

        }
        console.log('Received values of form: ', values);
        password(values)
    };

    var oldPassword = cookie.load("oldPassword");
    var newPassword = cookie.load("newPassword");
    var confirmPwd = cookie.load("confirmPwd");


    if(oldPassword!=null&&confirmPwd!=null){
        oldPassword = encrypt.base64decode(oldPassword);
        newPassword = encrypt.base64decode(newPassword);
        confirmPwd = encrypt.base64decode(confirmPwd);
    }
    return (

        <Form
            className={"container "}
            initialValues={{
                remember: true,
                oldPassword:oldPassword,
                newPassword:newPassword,
                confirmPwd:confirmPwd,
            }}
            onFinish={onFinish}
            size={"large"}>
            <h1>修改密码</h1>
            <Divider />


            <Form.Item

                label={"原始密码"}
                name="oldPassword"
                rules={[
                    {
                        required: true,
                        message: '请输入原始密码！',
                    },
                ]}
            ><Input placeholder={"请输入原始密码"} className={"input"} /></Form.Item>

            <Form.Item
                label={<span >新的密码</span>}
                name="newPassword"
                rules={[
                    {
                        required: true,
                        message: '请输入新的密码！',
                    },
                ]}><Input placeholder={"请输入新的密码"} type={"password"} className={"input"}/></Form.Item>
            <Form.Item
                label={"确认密码"}
                name="confirmPwd"
                rules={[
                    {
                        required: true,
                        message: '请再次输入新的密码！',
                    },
                ]}
            ><Input placeholder={"请再次输入新的密码" } type={"password"}  className={"input"}/></Form.Item>
            <br/>
            <Form.Item><Button className={"button"} type="primary" htmlType="submit" >修改</Button></Form.Item>
        </Form>
    );
}
const mapDispatchToProps = dispatch => ({
    password: (data) => dispatch(userActions.password(data)),
});
export default connect(null, mapDispatchToProps)(withRouter(UserPassword))
