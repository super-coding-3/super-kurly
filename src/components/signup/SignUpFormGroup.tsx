// SignupFormGroup.tsx
import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

interface SignupFormGroupProps {
  customLabel: string;
  name: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
  isButton: boolean;
}

const SignupFormGroup: React.FC<SignupFormGroupProps> = ({
  customLabel,
  name,
  type,
  placeholder,
  isRequired,
  isButton,
}) => {
  return (
    <SignupFormGroupWrap>
      <SignupFormItem>
        <label htmlFor={name} className="custom-label">
          {customLabel} {isRequired && <span>*</span>}
        </label>
        <InputItem>
          <Field id={name} name={name} type={type} placeholder={placeholder} />
          <ErrorMessage name={name} component="div" className="error-ms" />
        </InputItem>
        <BtnArea>{isButton ? <button>중복확인</button> : <></>}</BtnArea>
      </SignupFormItem>
    </SignupFormGroupWrap>
  );
};

export const SignupFormGroupWrap = styled.div`
  padding: 0.5rem 1rem;
`;

export const SignupFormItem = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  gap: 5px;
  label.custom-label {
    width: 140px;
    flex-grow: 1;
    font-weight: 500;
    color: rgb(51, 51, 51);
    font-size: 14px;
    padding-top: 12px;
    span {
      color: rgb(238, 106, 123);
    }
  }
`;

export const InputItem = styled.div`
  width: calc(100% - 270px);
  input {
    width: 100%;
    height: 46px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
    text-indent: 15px;
    &[type="radio"] {
      width: 20px;
      height: 20px;
    }
  }
`;

export const BtnArea = styled.div`
  width: 120px;
  height: 46px;
  button {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    display: block;
    text-align: center;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
  }
`;

export default SignupFormGroup;
