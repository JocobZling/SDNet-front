import styled from "styled-components";
import React from 'react';
import NormalLoginForm from "./MyLoginForm";
import Header from "../constant/Header";
import {Col, Row} from "antd";

const FormContainer = styled('div')`
    background:#ffffff;
    padding-top:5vh;
    padding-left:3vh;
    padding-right:3vh;
    padding-bottom:2vh;
`

const MyLoginContainer = ()  => (
    <Row>
        <Col span={24}>
            <Row style={{height:'12vh'}}>
                <Col span={24}>
                    <Header/>
                </Col>
            </Row>
            <Row align={"middle"} style={{height:'88vh', background:'#299fe3'}}>
                <Col span={24} style={{verticalAlign:'center'}}>
                    <Row>
                        <Col span={6} offset={16}>
                            <FormContainer>
                                <NormalLoginForm/>
                            </FormContainer>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
)
export default MyLoginContainer;