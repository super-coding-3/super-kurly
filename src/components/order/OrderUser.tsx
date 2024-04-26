import React from "react";
import styled from "styled-components";
import OrderTitle from "./OrderTitle";
import OrderRowKey from "./OrderRowKey";

const OrderUser: React.FC = () => {
  return (
    <OrderUserWrap>
      <OrderTitle title="주문자 정보" />
      <OrderUserRow>
        <OrderRowKey row="보내는 분" />
        <OrderUserValue>이효경</OrderUserValue>
      </OrderUserRow>
      <OrderUserRow>
        <OrderRowKey row="휴대폰" />
        <OrderUserValue>010-5574-2469</OrderUserValue>
      </OrderUserRow>
      <OrderUserRow>
        <OrderRowKey row="이메일" />
        {/* <OrderUserKey>이메일</OrderUserKey> */}
        <OrderUserValue>as167@naver.com</OrderUserValue>
      </OrderUserRow>
    </OrderUserWrap>
  );
};

export default OrderUser;

const OrderUserWrap = styled.div`
  margin-top: 75px;
  width: 100%;
`;

const OrderUserRow = styled.div`
  display: flex;
  line-height: 40px;
`;

const OrderUserValue = styled.div``;
