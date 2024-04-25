import React from "react";
import styled from "styled-components";
import OrderTitle from "./OrderTitle";
import OrderRowKey from "./OrderRowKey";

const OrderDelivery: React.FC = () => {
  return (
    <OrderDeliveryWrap>
      <OrderTitle title="배송 정보" />
      <OrderDeliveryRow>
        <OrderRowKey row="배송지" />
        <OrderDeliveryAddr>
          <div>서울 마포구 어쩌구</div>
          <button>변경</button>
        </OrderDeliveryAddr>
      </OrderDeliveryRow>
      <OrderDeliveryRow>
        <OrderRowKey row="배송 요청사항" />
        <OrderDeliveryReq>
          <div>배송 요청사항을 입력해주세요</div>
          <button>입력</button>
        </OrderDeliveryReq>
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
  button {
    width: 60px;
    line-height: 30px;
    border-radius: 3px;
    border: 1px solid rgb(221, 221, 221);
  }
`;

const OrderDeliveryReq = styled.div`
  color: rgb(240, 63, 64);
  button {
    width: 60px;
    line-height: 30px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    border: 1px solid rgb(95, 0, 128);
  }
`;
