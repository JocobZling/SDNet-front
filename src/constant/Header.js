import icon from "../images/icon.png";
import React from "react";
import styled from "styled-components";

const HeadContainer = styled('div')`
    color:#299fe3; 
    padding:0vh 0vh;
    background:white;
    height:12vh;
`
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

const Header = () => (<HeadContainer>
    <IconContainer>
        <img src={icon} style={{width:100, height:100}}/>
    </IconContainer>
    <TitleContainer>
        图像检测软件
    </TitleContainer>
    <br/>
    <DescriptionContainer>
        一款支持隐私保护的轻量级图像检测软件
    </DescriptionContainer>
</HeadContainer>)

export default Header