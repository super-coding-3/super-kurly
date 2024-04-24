import React from "react";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";

function Login(): JSX.Element {
  return (
    <Container>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm />
    </Container>
  );
}

export const Container = styled.div`
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
