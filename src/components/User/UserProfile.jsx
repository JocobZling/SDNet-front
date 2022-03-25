import React from 'react';
import {Col, Row, Image, Button, input} from "antd";
import '../../css/test.css'
import Form from "antd/es/form";
import {actions as userActions} from "../../ducks/user";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const UserProfile = ({profile}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="profile"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
        <Row

            gutter={[40, 40]} style={{marginTop: '20px'}}>

            <Col xs={{span: 4, offset: 3}}> <Image
                width={50}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            /></Col>
            <Col xs={{span: 17}}><h1>个人信息</h1></Col>
            <Col xs={{span: 4, offset: 3}}>昵称：</Col>
            <Col xs={{span: 17}}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: '请输入新的昵称',
                        },
                    ]}><input placeholder={"请输入新的用户名"} style={{width: 200, height: 30, fontSize: 12}}/></Form.Item></Col>
            <Col xs={{span: 4, offset: 3}}>邮箱：</Col>
            <Col xs={{span: 17}}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: '请输入新的邮箱',
                        },
                    ]}><input placeholder={"请输入新的邮箱"} style={{width: 200, height: 30, fontSize: 12}}/></Form.Item></Col>
            <Col xs={{span: 4, offset: 3}}>头像：</Col>
            <Col xs={{span: 17}}>
                <button>上传图片</button>
            </Col>
            <Col xs={{span: 6, offset: 7}}><Form.Item><Button htmlType="submit">确认修改</Button></Form.Item></Col>
        </Row
            >
        </Form>
    );
}

const mapDispatchToProps = dispatch => ({
    profile: (data) => dispatch(userActions.profile(data)),
});
export default connect(null, mapDispatchToProps)(withRouter(UserProfile))

