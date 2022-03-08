import {Form, Input, Button, Col, Typography, Modal} from 'antd';
import React, {useState} from 'react'
import {connect} from 'react-redux'
import {actions as userActions} from '../ducks/user'
import { withRouter } from 'react-router-dom'
import '../css/form.css'

const {Title} = Typography;

const layout = {
    labelCol: {span: 9},
    wrapperCol: {span: 9, offset: 1},
};

const tailLayout = {
    wrapperCol: {offset: 7, span: 12},
};

const style = {
    padding: '10px 0',
    color: 'white'
};

const CollectionCreateForm = ({visible, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="注册"
            okText="注册"
            cancelText="取消"
            onCancel={onCancel}
            className={'register-model'}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{modifier: 'public'}}
                className='register'
            >
                <Form.Item
                    name="name"
                    label="用户名"
                    rules={[{required: true, message: '请输入用户名'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                        {
                            type: 'email',
                            message: '请输入格式正确的邮箱',
                        },
                        {
                            required: true,
                            message: '请输入邮箱',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[{required: true, message: '请输入密码'}]}
                >
                    <Input.Password/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const LoginForm = ({login,register}) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        register(values)
        setVisible(false);
    };

    const onFinish = values => {
        login(values)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{
                padding: '20px 0',
                backgroundColor: 'rgba(35,31,31,0.55)',
            }}
        >
            <Col offset={5} style={{marginBottom: '5vh'}}>
                <Title style={{color: 'white'}}>支持隐私保护的检测系统</Title>
            </Col>
            <Form.Item
                label="用户邮箱"
                name="email"
                rules={[{required: true, message: '请输入用户邮箱'}]}
                style={style}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[{required: true, message: '请输入密码'}]}
                style={style}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item {...tailLayout} layout={'horizontal'}>
                <Button type="primary" htmlType="submit"
                        style={{width: '48%', backgroundColor: 'black', borderColor: 'black', marginRight: '10px'}}>
                    登录
                </Button>
                <Button type="primary" onClick={() => {setVisible(true);}} style={{width: '48%', backgroundColor: 'black', borderColor: 'black'}}>
                    注册
                </Button>
                <CollectionCreateForm
                    visible={visible}
                    onCreate={onCreate}
                    onCancel={() => {
                        setVisible(false);
                    }}
                />
            </Form.Item>
        </Form>

    );
};
const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(userActions.login(data)),
    register:(data)=>dispatch(userActions.register(data))
});

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))

