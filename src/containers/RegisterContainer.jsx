import styled from "styled-components";
import React from "react";
import RegisterForm from "./RegisterForm";
import Header from "../constant/Header";

const LoginPage = styled('div')`
    height:100vh;
`
const BodyContainer = styled('div')`
    background:#299fe3;
    height:88vh;
    text-align:center;
    vertical-align:center;
`
const FormContainer = styled('div')`
    text-align:center;
    position:absolute;
    margin-top:200px;
    margin-left:550px;
    width:100vh;
    border-color:black;
    border-width:3px;
`

const RegisterContainer = () => (
    <LoginPage>
        <Header/>
        <BodyContainer>
            <FormContainer>
                <RegisterForm/>
            </FormContainer>
        </BodyContainer>

    </LoginPage>
);

export default RegisterContainer