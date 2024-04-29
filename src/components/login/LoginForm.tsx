import * as React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import defaultSchema from "../../schema/index";

interface FormValues {
  userId: string;
  password: string;
}

interface Values {
  userId: string;
  password: string;
}

function LoginForm(): JSX.Element {
  const navigate = useNavigate();

  const onSubmitHandler = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      console.log("userId", values.userId, "password", values.password);
      alert("로그인 성공!");
      setSubmitting(false);
      navigate("/");
    }, 500);
  };

  return (
    <LoginFormik>
      <Formik
        initialValues={{
          userId: "",
          password: "",
        }}
        validationSchema={defaultSchema} // 유효성 검사 스키마 추가
        onSubmit={onSubmitHandler}
      >
        <Form>
          <FormGroup>
            <label htmlFor="login-user-id">유저아이디</label>
            <Field
              id="login-user-id"
              name="userId"
              type="text"
              placeholder="아이디를 입력해주세요"
            />
            <ErrorMessage name="userId" component="div" className="error-ms" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="login-user-pw">유저비밀번호</label>
            <Field
              id="login-user-pw"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-ms"
            />
          </FormGroup>
          <FindLoginInfoWrap>
            <FindLoginInfo>
              <li>
                <BtnGo to={"/"}>아이디 찾기</BtnGo>
              </li>
              <li>
                <BtnGo to={"/"}>비번 찾기</BtnGo>
              </li>
            </FindLoginInfo>
          </FindLoginInfoWrap>

          <BtnLoginSubmit type="submit">로그인</BtnLoginSubmit>
          <BtnGoSignup to={"/"}>회원가입</BtnGoSignup>
        </Form>
      </Formik>
    </LoginFormik>
  );
}

const LoginFormik = styled.div`
  width: 340px;
  margin: 0 auto;
  input {
    height: 54px;
    font-size: 14px;
    width: 100%;
    height: 46px;
    text-indent: 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
  }
  label {
    display: none;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 0.5rem;
`;

const BtnLoginSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  font-size: 16px;
  font-weight: 500;
`;

const BtnGoSignup = styled(Link)`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
  font-size: 16px;
  font-weight: 500;
`;

const FindLoginInfoWrap = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

const FindLoginInfo = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BtnGo = styled(Link)`
  color: rgb(51, 51, 51);
  font-size: 12px;
`;
export default LoginForm;
