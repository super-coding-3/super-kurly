import React from "react";
import LoginForm from "../components/login/LoginForm";
import styled from "styled-components";

function Login() {
  return (
    <LoginContainer>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
  background-color: rgb(255, 255, 255);
`;

const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 40px;
`;

export default Login;
