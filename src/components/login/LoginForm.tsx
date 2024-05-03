import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { MAIN_COLOR } from "./../../constans/color";

import { LoginSchema } from "../../schema/formSchema";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

interface LoginValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const loginSubmitHandler = async (
    values: LoginValues,
    formikHelpers: FormikHelpers<LoginValues>
  ) => {
    try {
      const response = await axios.post(
        "http://43.203.104.198:8080/api/member/login",
        values
      );
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      onLoginSuccess(); // 로그인 성공 시 상위 컴포넌트의 함수 호출
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("로그인 실패. 다시 시도해주세요.");
    }
    formikHelpers.setSubmitting(false);
  };

  return (
    <LoginFormik>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema} // 유효성 검사 스키마 추가
        onSubmit={loginSubmitHandler}
      >
        <Form>
          <LoginField>
            <label htmlFor="email">이메일</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-ms" />
          </LoginField>
          <LoginField>
            <label htmlFor="password">비밀번호</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-ms"
            />
          </LoginField>

          <FindLoginInfoWrap>
            <FindLoginInfo>
              <BtnGo to={"/"}>아이디 찾기</BtnGo>
              <Bar />
              <BtnGo to={"/"}>비번 찾기</BtnGo>
            </FindLoginInfo>
          </FindLoginInfoWrap>

          <BtnLoginSubmit type="submit">로그인</BtnLoginSubmit>
          <BtnGoSignup to={"/signup"}>회원가입</BtnGoSignup>
        </Form>
      </Formik>
    </LoginFormik>
  );
};

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

const LoginField = styled.div`
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
  background-color: ${MAIN_COLOR};
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
  color: ${MAIN_COLOR};
  background-color: rgb(255, 255, 255);
  border: 1px solid ${MAIN_COLOR};
  font-size: 16px;
  font-weight: 500;
`;

const FindLoginInfoWrap = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

const FindLoginInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Bar = styled.div`
  width: 1px;
  height: 10px;
  background: #888;
`;

const BtnGo = styled(Link)`
  display: block;
  color: rgb(51, 51, 51);
  font-size: 12px;
`;
export default LoginForm;
