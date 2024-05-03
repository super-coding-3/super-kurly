import React from "react";
import styled from "styled-components";
import OrderProduct from "../components/order/OrderProduct";
import OrderUser from "../components/order/OrderUser";
import OrderDelivery from "../components/order/OrderDelivery";
import OrderPrivacy from "../components/order/OrderPrivacy";
import OrderPrice from "../components/order/OrderPrice";
import { MAIN_COLOR } from "../constans/color";
import { CartData } from "../components/common/data/CartData";
import { UserData } from "../components/common/data/UserData";

const Order: React.FC = () => {
  const orderPaymentBtnHandler = () => {
    alert("주문이 완료되었습니다.");
  };

  return (
    <OrderFragment>
      <OrderTitle>주문서</OrderTitle>
      <OrderProduct orderData={CartData()} />
      <OrderWrap>
        <OrderDetail>
          <OrderUser
            name={UserData().name}
            phone={UserData().phone}
            email={UserData().email}
          />
          <OrderDelivery address={UserData().address} />
          <OrderPrivacy />
          <OrderPaymentBtn>
            <button onClick={orderPaymentBtnHandler}>
              {CartData()
                .reduce((acc: number, curr: any) => acc + curr.price, 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원 결제하기
            </button>
          </OrderPaymentBtn>
        </OrderDetail>
        <OrderPrice orderData={CartData()} />
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
  font-size: 14px;
`;

const OrderTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
`;

const OrderWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 1050px;
  gap: 20px;
  @media screen and (max-width: 1050px) {
    max-width: 742px;
  }
  @media screen and (max-width: 742px) {
    max-width: 540px;
  }
  @media screen and (max-width: 540px) {
    max-width: 340px;
  }
`;

const OrderDetail = styled.div`
  width: 100%;
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
    background-color: ${MAIN_COLOR};
    font-weight: 500;
  }
`;
