import React from 'react';
import {Col, Row, Image, Button, Input, Divider} from "antd";
import '../../css/userrInfo.css'
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
        <Form  className={"container "}
            name="profile"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>

            <h1>个人信息修改</h1>
            <Col xs={{span: 1, offset: 1}}> <Image width={50}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/></Col>
            <Divider />
            <Form.Item
                label={"昵称："}
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: '请输入新的昵称',
                        },
                    ]}><Input  placeholder={"请输入新的用户名"} className={"input"}/></Form.Item>
                <Form.Item
                    label={"邮箱："}
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: '请输入新的邮箱',
                        },
                    ]}><Input placeholder={"请输入新的邮箱"} className={"input"} /></Form.Item>
            <br/>
            <Form.Item
                label={"头像："}
                name="tx">
                <button className={"button1"}>上传图片</button>
            </Form.Item>
                <Form.Item><Button htmlType="submit" className={"button"} >确认修改</Button></Form.Item>

        </Form>
    );
}

const mapDispatchToProps = dispatch => ({
    profile: (data) => dispatch(userActions.profile(data)),
});
export default connect(null, mapDispatchToProps)(withRouter(UserProfile))

