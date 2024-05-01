import React from "react";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  return (
    <Container>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </Container>
  );
};

export const Container = styled.div`
  max-width: 1024px;
  margin: 90px auto 60px;
  background-color: rgb(255, 255, 255);
  @media (max-width: 768px) {
    margin: 60px auto 30px;
  }
`;

const LoginTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default Login;
