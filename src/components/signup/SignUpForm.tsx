import React from "react";
import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import defaultSchema from "../../schema/index";
import SignupFormGroup from "./SignUpFormGroup";
import SignupFormGroupRadio from "./SignUpFormGroupRadio";
import AgreementList from "./AgreementList";

interface Values {
  email: string;
  password: string;
  passwordConfirm: string;
  userName: string;
  phone: string;
  address: string;
  sex: "male" | "female";
  brith: string;
}

function SignUpForm(): JSX.Element {
  const navigate = useNavigate();

  const onSubmitHandler = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const response = await axios.post("/api/member/signup", values);
      console.log(response);
      setSubmitting(true); // Form 제출 시작
      setSubmitting(false); // Form 제출 완료
      alert("축하합니다! 회원가입이 되었습니다");
      navigate("/"); // Main 페이지로 이동
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      setSubmitting(false);
    }
  };

  return (
    <SignUpFormWrap>
      <FormNotice>
        <span>*</span> 필수입력사항
      </FormNotice>

      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
          userName: "",
          phone: "",
          address: "",
          sex: "male",
          brith: "",
        }}
        validationSchema={defaultSchema} // 유효성 검사 스키마 추가
        onSubmit={onSubmitHandler}
      >
        <Form>
          <SignupFormGroup
            customLabel="이메일"
            name="email"
            type="text"
            placeholder="예:superkurly@gmail.com"
            isRequired={true}
            isButton={true}
          />
          <SignupFormGroup
            customLabel="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            isRequired={true}
            isButton={false}
          />
          <SignupFormGroup
            customLabel="비밀번호 확인"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            isRequired={true}
            isButton={false}
          />
          <SignupFormGroup
            customLabel="이름"
            name="userName"
            type="text"
            placeholder="이름을 입력해주세요"
            isRequired={true}
            isButton={false}
          />

          <SignupFormGroup
            customLabel="주소"
            name="address"
            type="text"
            placeholder="주소를 입력해주세요"
            isRequired={true}
            isButton={false}
          />
          <SignupFormGroupRadio
            customLabel="성별"
            name="gender"
            type="radio"
            options={[
              { value: "male", label: "남자" },
              { value: "female", label: "여자" },
            ]}
            isRequired={false}
            isButton={false}
          />
          <SignupFormGroup
            customLabel="생년월일"
            name="brith"
            type="text"
            placeholder="예:921122"
            isRequired={false}
            isButton={false}
          />
          <FormNotice />
          <AgreementList />
          <BtnSubmit type="submit">가입하기</BtnSubmit>
        </Form>
      </Formik>
    </SignUpFormWrap>
  );
}

const SignUpFormWrap = styled.div`
  width: 640px;
  margin: 0 auto;
`;

const FormNotice = styled.div`
  padding: 0.5rem;
  border-bottom: 2px solid rgb(51, 51, 51);
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 17px;
  text-align: right;
  span {
    color: rgb(238, 106, 123);
  }
`;

const BtnSubmit = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  margin: 0 auto;
`;
export default SignUpForm;
