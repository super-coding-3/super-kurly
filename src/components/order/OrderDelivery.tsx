import React from "react";
import styled from "styled-components";
import OrderTitle from "./OrderTitle";
import OrderRowKey from "./OrderRowKey";
import { MAIN_COLOR } from "../../constans/color";

const OrderDelivery: React.FC = () => {
  return (
    <OrderDeliveryWrap>
      <OrderTitle title="배송 정보" />
      <OrderDeliveryRow>
        <OrderRowKey row="배송지" />
        <OrderDeliveryAddr>
          <div>서울 마포구 어쩌구</div>
          <a href="/mypage">변경</a>
        </OrderDeliveryAddr>
      </OrderDeliveryRow>
    </OrderDeliveryWrap>
  );
};

export default OrderDelivery;

const OrderDeliveryWrap = styled.div`
  margin-top: 75px;
  width: 100%;
`;

const OrderDeliveryRow = styled.div`
  display: flex;
  line-height: 60px;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const OrderDeliveryAddr = styled.div`
  color: rgb(51, 51, 51);
  a {
    margin-bottom: 20px;
    display: block;
    width: 60px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    color: ${MAIN_COLOR};
    border: 1px solid ${MAIN_COLOR};
  }
`;
