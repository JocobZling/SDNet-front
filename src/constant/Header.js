import icon from "../images/icon.png";
import React from "react";
import styled from "styled-components";
import {Col, Row} from "antd";


const TitleContainer = styled('HeadContainer')`
    font-size:50px;
    font-family:宋体;
    margin-left:25px;
`
const DescriptionContainer = styled('HeadContainer')`
    font-size:25px;
    font-family:宋体;
    margin-left:25px;
`
const IconContainer = styled('div')`
    float:left;
    width:auto;
    height:auto;
    margin-top:10px;
    margin-left:20px;
`

const Header = () => (
    <Row style={{color:'#299fe3', background:'white'}}>
        <Col>
            <IconContainer>
                <img src={icon} style={{width:100, height:100}}/>
            </IconContainer>
        </Col>
        <Col>
            <TitleContainer>
                支持隐私保护的肖像取证系统
            </TitleContainer>
            <br/>
            <DescriptionContainer>
                数字取证教育部工程研究中心
            </DescriptionContainer>
        </Col>
    </Row>
)

export default Header