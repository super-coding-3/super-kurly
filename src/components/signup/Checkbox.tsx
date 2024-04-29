import React from "react";
import styled from "styled-components";
import { Field } from "formik";

interface CheckboxProps {
  name: string;
  text: string;
  requiredText: string;
  checked: boolean;
  onChange: () => void;
}

const HiddenCheckbox = styled(Field).attrs({ type: "checkbox" })`
  display: none;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  text,
  requiredText,
  checked,
  onChange,
}) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox name={name} checked={checked} onChange={onChange} />
      <Icon
        src={checked ? "img/common/check-on.svg" : "img/common/check.svg"}
        alt="Checkbox"
        onClick={onChange}
      />
      <p>
        {text} {requiredText && <span>({requiredText})</span>}
      </p>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-size: 14px;
    span {
      font-size: 12px;
      color: #888;
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default Checkbox;
