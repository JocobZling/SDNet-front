import React from 'react';
import {Row, Col, Image, Layout} from 'antd';
import img from '../images/login.jpg'
import styled from 'styled-components'
import LoginForm from "./LoginForm";

const {Content, Sider} = Layout;

const LoginPage = styled('div')`
    height:100vh;
    background: url(${img});
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
`
const FormContainer = styled('div')`
    color:white;
    padding:27vh 60vh;
`
const LoginContainer = () => (
    <LoginPage>
        <FormContainer>
            <LoginForm/>
        </FormContainer>
    </LoginPage>

)
export default LoginContainer;
