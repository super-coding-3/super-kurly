import React from "react";
import styled from "styled-components";

import { Container } from "./Login";

function SignUp(): JSX.Element {
  return (
    <Container>
      <SignUpTitle>회원가입</SignUpTitle>
    </Container>
  );
}

const SignUpTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -1px;
  color: rgb(51, 51, 51);
`;

export default SignUp;
