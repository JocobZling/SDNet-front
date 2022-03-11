import styled from "styled-components";
import React from 'react';
import NormalLoginForm from "./MyLoginForm";
import Header from "../constant/Header";

const LoginPage = styled('div')`
    height:100vh;
`

const BodyContainer = styled('div')`
    background:#299fe3;
    height:88vh;
`
const FormContainer = styled('div')`
    position:absolute;
    background:#ffffff;
    margin-left:1300px;
    margin-top:180px;
    padding-top:50px;
    padding-left:30px;
    padding-right:30px;
    width:45vh;
`

const MyLoginContainer = ()  => (
    <LoginPage>
        <Header/>
        <BodyContainer>
            <FormContainer>
                <NormalLoginForm/>
            </FormContainer>
        </BodyContainer>
    </LoginPage>
)
export default MyLoginContainer;