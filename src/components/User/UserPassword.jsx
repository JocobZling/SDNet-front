import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Form,input, Button } from 'antd';
import '../../css/test.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import cookie from "react-cookies";
import * as encrypt from '../../utils/base64'
import {actions as userActions} from "../../ducks/user";

const UserPassword =({password})=>{
    const onFinish = (values) => {
        console.log("success");
        // if(values.remember){
        values.oldPassword = encrypt.base64encode(values.oldPassword);
        values.newPassword = encrypt.base64encode(values.newPassword);
        values.confirmPwd = encrypt.base64encode(values.confirmPwd);
        //let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);//一天
        // cookie.save('oldPassword', oldPassword, { expires: inFifteenMinutes });
        // cookie.save('newPassword', newPassword, { expires: inFifteenMinutes });
        // cookie.save('confirmPwd', confirmPwd, { expires: inFifteenMinutes });


        // }else{
        //     cookie.remove('oldPassword');
        //     cookie.remove('newPassword');
        //     cookie.remove('confirmPwd');
        //
        // }
        console.log('Received values of form: ', values);
        password(values)
    };

    // var oldPassword = cookie.load("oldPassword");
    // var newPassword = cookie.load("newPassword");
    // var confirmPwd = cookie.load("confirmPwd");


    // if(oldPassword!=null&&confirmPwd!=null){
    //     oldPassword = encrypt.base64decode(oldPassword);
    //     newPassword = encrypt.base64decode(newPassword);
    //     confirmPwd = encrypt.base64decode(confirmPwd);
    // }
    return (
        <Form
            className={"container "}
            // initialValues={{
            //     remember: true,
            //     oldPassword:oldPassword,
            //     newPassword:newPassword,
            //     confirmPwd:confirmPwd,
            // }}
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
