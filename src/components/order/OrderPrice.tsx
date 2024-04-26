import React from "react";
import styled from "styled-components";
import OrderDelivery from "./OrderDelivery";

const OrderPrice: React.FC = () => {
  return (
    <OrderPriceFragment>
      <OrderPriceWrap>
        <OrderPriceTitle>결제 금액</OrderPriceTitle>
        <OrderPriceDetail>
          <OrderPriceRow>
            <OrderPriceRowKey>주문금액</OrderPriceRowKey>
            <OrderAcount>
              <em>14,130</em>원
            </OrderAcount>
          </OrderPriceRow>
          <OrderPriceRow>
            <OrderPriceRowKey>배송비</OrderPriceRowKey>
            <OrderAcount>
              <em>0</em>원
            </OrderAcount>
          </OrderPriceRow>
          <OrderPriceFinal>
            <OrderPriceRowKey>최종결제금액</OrderPriceRowKey>
            <OrderAcount>
              <em>14,130</em>원
            </OrderAcount>
          </OrderPriceFinal>
        </OrderPriceDetail>
      </OrderPriceWrap>
    </OrderPriceFragment>
  );
};

export default OrderPrice;

const OrderPriceFragment = styled.div`
  position: relative;
  width: 284px;
`;

const OrderPriceWrap = styled.div`
  width: 284px;
  position: sticky;
  top: 0px;
`;

const OrderPriceTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
`;

const OrderPriceDetail = styled.div`
  width: 100%;
  padding: 17px 16px 18px 18px;
  background: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OrderPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderPriceRowKey = styled.div``;

const OrderAcount = styled.div`
  em {
    font-size: 20px;
    padding-right: 3px;
  }
`;

const OrderPriceFinal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid rgb(242, 242, 242);
  em {
    font-weight: 700;
  }
`;
