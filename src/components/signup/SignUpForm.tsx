import React from "react";
import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { MAIN_COLOR } from "./../../constans/color";

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
  gender: "male" | "female";
  brith: string;
  role: "USER";
  all: boolean;
  agreement1: boolean;
  agreement2: boolean;
  agreement3: boolean;
  agreement4: boolean;
}

function SignUpForm(): JSX.Element {
  const navigate = useNavigate();

  const onSubmitHandler = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    if (values.password !== values.passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setSubmitting(false);
      return;
    }

    // 비밀번호 일치, 약관동의,  서버 보내지않기
    const {
      passwordConfirm,
      all,
      agreement1,
      agreement2,
      agreement3,
      agreement4,
      ...requestData
    } = values;

    console.log(values);

    try {
      const response = await axios.post(
        "http://43.203.104.198:8080/api/member/signup",
        requestData
      );
      console.log(response);
      setSubmitting(true);
      setSubmitting(false);
      alert("축하합니다! 회원가입이 되었습니다");
      // navigate("/");
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
          gender: "male",
          brith: "",
          role: "USER",
          all: false,
          agreement1: false,
          agreement2: false,
          agreement3: false,
          agreement4: false,
        }}
        validationSchema={defaultSchema} // 유효성 검사 스키마 추가
        onSubmit={onSubmitHandler}
      >
        {({ setFieldValue }) => (
          <Form>
            <SignupFormGroup
              customLabel="이메일"
              name="email"
              type="text"
              placeholder="예:superkurly@gmail.com"
              isRequired={true}
              isButton={true}
              setFieldValue={setFieldValue}
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
              customLabel="전화번호"
              name="phone"
              type="text"
              placeholder="예:010-1234-5678"
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
              isRequired={true}
              isButton={false}
            />
            <FormNotice />
            <AgreementList />
            <BtnSubmit type="submit">가입하기</BtnSubmit>
          </Form>
        )}
      </Formik>
    </SignUpFormWrap>
  );
}

const SignUpFormWrap = styled.div`
  width: 640px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
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
  background-color: ${MAIN_COLOR};
  border: 0px none;
  margin: 0 auto;
`;
export default SignUpForm;
