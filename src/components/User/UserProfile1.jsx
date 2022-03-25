import React from 'react';
import {Col, Row, Image, Button, input} from "antd";
import '../../css/test.css'

const UserProfile = () => (
    <Row gutter={[40, 40]} style={{marginTop: '20px'}}>

            <Col xs={{span: 4, offset: 3}}> <Image
                width={50}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            /></Col>
            <Col xs={{span: 17}} ><h1 >个人信息</h1></Col>
            <Col xs={{span: 4, offset: 3}}>昵称：</Col>
            <Col xs={{span: 17}}><input  placeholder={"请输入新的用户名"} style={{width:200,height:30,fontSize:12}}/></Col>
            <Col xs={{span: 4, offset: 3}}>邮箱：</Col>
            <Col xs={{span: 17}}><input  placeholder={"请输入新的邮箱"} style={{width:200,height:30,fontSize:12}}/></Col>
            <Col xs={{span: 4, offset: 3}}>头像：</Col>
            <Col xs={{span: 17}}><button>上传图片</button></Col>
            <Col xs={{span: 6, offset: 7}}><Button>确认修改</Button></Col>
    </Row>
)

export default UserProfile
