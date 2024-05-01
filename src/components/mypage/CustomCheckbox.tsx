import styled from "styled-components";
import { MAIN_COLOR } from "../../constans/color";

const InputCheckbox = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  margin: 0px 5px 0px 0px;

  &:checked,
  &:active {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${MAIN_COLOR};
  }
`;

interface CheckboxProps {
  isChecked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void | (() => void);
}

const CustomCheckbox = ({ isChecked, onChange }: CheckboxProps) => {
  return (
    <InputCheckbox
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default CustomCheckbox;
