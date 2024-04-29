import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

import {
  SignupFormGroupWrap,
  SignupFormItem,
  InputItem,
  BtnArea,
} from "./SignUpFormGroup";

interface SignupFormGroupRadioProps {
  customLabel: string;
  name: string;
  type: string;
  options: { value: string; label: string }[];
  isRequired?: boolean;
  isButton: boolean;
}

const SignupFormGroupRadio: React.FC<SignupFormGroupRadioProps> = ({
  customLabel,
  name,
  type,
  options,
  isRequired,
  isButton,
}) => {
  return (
    <SignupFormGroupWrap>
      <SignupFormItem>
        <p className="custom-label">
          {customLabel} {isRequired && <span>*</span>}
        </p>
        <InputItem style={{ display: "flex" }}>
          <RadioGroup>
            {options.map((option) => {
              return (
                <RadioItem key={option.value}>
                  <Field
                    type={type}
                    name={name}
                    value={option.value}
                    id={`${name}-${option.value}`}
                  />
                  <label htmlFor={`${name}-${option.value}`}>
                    {option.label}
                  </label>
                </RadioItem>
              );
            })}
          </RadioGroup>
          <ErrorMessage name={name} component="div" className="error-ms" />
        </InputItem>
        <BtnArea>{isButton ? <button>중복확인</button> : <></>}</BtnArea>
      </SignupFormItem>
    </SignupFormGroupWrap>
  );
};

const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RadioItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignupFormGroupRadio;
