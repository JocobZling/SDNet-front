import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'
import '../css/myform.css'
import {actions as userActions} from "../ducks/user";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import cookie from "react-cookies";
import * as encrypt from '../utils/base64'

const layout = {
    wrapperCol: {span:30},
};

const NormalLoginForm = ({login}) => {
    const onFinish = (values) => {
        if(values.remember){
            var password = encrypt.base64encode(values.password);
            var email = encrypt.base64encode(values.email);
            let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);//一天
            cookie.save('password', password, { expires: inFifteenMinutes });
            cookie.save('email', email, { expires: inFifteenMinutes });

        }else{
            cookie.remove('password');
            cookie.remove('email');
        }
        console.log('Received values of form: ', values);
        login(values)
    };

    var email = cookie.load("email");
    var password = cookie.load("password");

    if(email!=null&&password!=null){
        email = encrypt.base64decode(email);
        password = encrypt.base64decode(password);
    }

    return (
        <Form
            {...layout}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
                email: email,
                password: password,
            }}
            onFinish={onFinish}
            size={"large"}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: '请输入您的邮箱！',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入您的密码！',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                或 <a href="http://localhost:3000/#/register">立即注册！</a>
            </Form.Item>
        </Form>
    );
};

const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(userActions.login(data)),
});

export default connect(null, mapDispatchToProps)(withRouter(NormalLoginForm))

