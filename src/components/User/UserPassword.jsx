import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';

const layout = {
    labelCol: {
        span: 4,
        offset:2

    },
    wrapperCol: {
        span: 10,
        offset:2
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 16,
    },
};
const itemStyle={
    color:'black !important',
    marginTop:'20px'
}
const UserPassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="password"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{marginTop:"15vh",color:'black'}}

        >

            <Form.Item
                style={itemStyle}
                label="原始密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入旧密码',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                label="新的密码"
                name="newPassword"
                rules={[
                    {
                        required: true,
                        message: '请输入新的密码',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                label="再输一遍"
                name="newAgainPassword"
                rules={[
                    {
                        required: true,
                        message: '请再输入一遍新的密码',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button htmlType="submit">
                    确认修改
                </Button>
            </Form.Item>
        </Form>
    );
}


export default UserPassword
