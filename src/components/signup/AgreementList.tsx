import React from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";

import Checkbox from "./Checkbox";

interface Agreement {
  all: boolean;
  agreement1: boolean;
  agreement2: boolean;
  agreement3: boolean;
  agreement4: boolean;
}

const AgreementList: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<Agreement>();

  return (
    <AgreementListWrap>
      <AgreementCustomLabel>
        이용약관동의 <span>*</span>{" "}
      </AgreementCustomLabel>
      <CheckboxList>
        <Checkbox
          name="all"
          text="전체 동의"
          requiredText=""
          checked={values.all}
          onChange={() => {
            setFieldValue("all", !values.all);
            setFieldValue("agreement1", !values.all);
            setFieldValue("agreement2", !values.all);
            setFieldValue("agreement3", !values.all);
            setFieldValue("agreement4", !values.all);
          }}
        />
        <Checkbox
          name="agreement1"
          text="개인정보 수집∙이용 동의"
          requiredText="필수"
          checked={values.agreement1}
          onChange={() => {
            setFieldValue("agreement1", !values.agreement1);
            setFieldValue(
              "all",
              values.agreement1 && values.agreement2 && values.agreement3
            );
          }}
        />
        <Checkbox
          name="agreement2"
          text="개인정보 수집∙이용 동의"
          requiredText="필수"
          checked={values.agreement2}
          onChange={() => {
            setFieldValue("agreement2", !values.agreement2);
            setFieldValue(
              "all",
              values.agreement1 && values.agreement2 && values.agreement3
            );
          }}
        />
        <Checkbox
          name="agreement3"
          text="무료배송, 할인쿠폰 등 혜택/정보 수신 동의"
          requiredText="필수"
          checked={values.agreement3}
          onChange={() => {
            setFieldValue("agreement3", !values.agreement3);
            setFieldValue(
              "all",
              values.agreement1 && values.agreement2 && values.agreement3
            );
          }}
        />
        <Checkbox
          name="agreement4"
          text="본인은 만 14세 이상입니다."
          requiredText="필수"
          checked={values.agreement4}
          onChange={() => {
            setFieldValue("agreement4", !values.agreement4);
            setFieldValue(
              "all",
              values.agreement1 &&
                values.agreement2 &&
                values.agreement3 &&
                values.agreement4
            );
          }}
        />
      </CheckboxList>
    </AgreementListWrap>
  );
};

const AgreementListWrap = styled.div`
  padding: 1rem 1rem 3rem;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AgreementCustomLabel = styled.div`
  width: 140px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  font-size: 14px;
  span {
    color: rgb(238, 106, 123);
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
    padding-top: 0;
  }
`;

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default AgreementList;
