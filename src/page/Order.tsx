import React from "react";
import styled from "styled-components";
import OrderProduct from "../components/order/OrderProduct";
import OrderUser from "../components/order/OrderUser";
import OrderDelivery from "../components/order/OrderDelivery";
import OrderPrivacy from "../components/order/OrderPrivacy";
import OrderPrice from "../components/order/OrderPrice";

const Order: React.FC = () => {
  return (
    <OrderFragment>
      <OrderTitle>주문서</OrderTitle>
      <OrderProduct />
      <OrderWrap>
        <OrderDetail>
          <OrderUser />
          <OrderDelivery />
          <OrderPrivacy />
          <OrderPaymentBtn>
            <button>14,130원 결제하기</button>
          </OrderPaymentBtn>
        </OrderDetail>
        <OrderPrice />
      </OrderWrap>
    </OrderFragment>
  );
};

export default Order;

const OrderFragment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;

const OrderTitle = styled.div`
  text-align: center;
  width: 1050px;
  font-weight: 500;
  font-size: 28px;
`;

const OrderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 20px;
`;

const OrderDetail = styled.div`
  width: 742px;
`;

const OrderPaymentBtn = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 240px;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    font-weight: 500;
  }
`;
