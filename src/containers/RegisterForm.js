import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    } from 'antd';
import {actions as userActions} from "../ducks/user";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const formItemLayout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 10
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        span: 20
    },
};


const RegistrationForm = ({register}) => {
    const [createForm] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        register(values)
    };

    const onReset = () => {
        createForm.resetFields();
    }

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    return (
        <Form
            {...formItemLayout}
            form={createForm}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            size={"large"}
        >
            <Form.Item
                name="name"
                id="name"
                label="用户名"
                tooltip="我们该如何称呼您？"
                rules={[
                    {
                        required: true,
                        message: '请输入您的用户名！',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                id="email"
                label="电子邮箱"
                rules={[
                    {
                        type: 'email',
                        message: '请输入正确的电子邮箱格式！',
                    },
                    {
                        required: true,
                        message: '请输入您的电子邮箱！',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                id="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: '请您输入密码！',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                id="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请再次输入您的密码！',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('两次输入的密码不匹配！'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" style={{background:"white", color:"#299fe3"}} onClick={onReset} shape={"round"}>
                    重&nbsp;&nbsp;&nbsp;&nbsp;设
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" htmlType="submit" style={{background:"white", color:"#299fe3"}} shape={"round"}>
                    注&nbsp;&nbsp;&nbsp;&nbsp;册
                </Button>
            </Form.Item>
        </Form>
    );
};

const mapDispatchToProps = dispatch => ({
    register:(data)=>dispatch(userActions.register(data))
});

export default connect(null, mapDispatchToProps)(withRouter(RegistrationForm))