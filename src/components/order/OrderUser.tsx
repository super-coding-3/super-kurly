import React from "react";
import styled from "styled-components";
import OrderTitle from "./OrderTitle";
import OrderRowKey from "./OrderRowKey";

interface OrderDataProps {
  name: string;
  phone: string;
  email: string;
}

const OrderUser: React.FC<OrderDataProps> = (props) => {
  return (
    <OrderUserWrap>
      <OrderTitle title="주문자 정보" />
      <OrderUserRow>
        <OrderRowKey row="보내는 분" />
        <OrderUserValue>{props.name}</OrderUserValue>
      </OrderUserRow>
      <OrderUserRow>
        <OrderRowKey row="휴대폰" />
        <OrderUserValue>{props.phone}</OrderUserValue>
      </OrderUserRow>
      <OrderUserRow>
        <OrderRowKey row="이메일" />
        <OrderUserValue>{props.email}</OrderUserValue>
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
