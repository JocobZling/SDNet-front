import React from 'react';
import {Col, Row, Image, Button} from "antd";

const UserProfile = () => (
    <Row gutter={[40, 40]} style={{marginTop: '20px'}}>
        <Col xs={{span: 4, offset: 3}}>头像：</Col>
        <Col xs={{span: 17}}> <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        /></Col>
        <Col xs={{span: 4, offset: 3}}>用户名：</Col>
        <Col xs={{span: 17}}>jocobzling</Col>
        <Col xs={{span: 4, offset: 3}}>邮箱：</Col>
        <Col xs={{span: 17}}>924798429@qq.com</Col>
        <Col xs={{span: 6, offset: 7}}><Button>编辑信息</Button></Col>
    </Row>
)

export default UserProfile
