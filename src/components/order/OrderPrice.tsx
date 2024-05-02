import React from "react";
import styled from "styled-components";

interface OrderDataProps {
  orderData: Array<object>;
}

const OrderPrice: React.FC<OrderDataProps> = (props) => {
  return (
    <OrderPriceFragment>
      <OrderPriceWrap>
        <OrderPriceTitle>결제 금액</OrderPriceTitle>
        <OrderPriceFinal>
          <OrderPriceRowKey>최종결제금액</OrderPriceRowKey>
          <OrderAmount>
            <em>
              {props.orderData
                .reduce((acc: number, curr: any) => acc + curr.price, 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </em>
            원
          </OrderAmount>
        </OrderPriceFinal>
      </OrderPriceWrap>
    </OrderPriceFragment>
  );
};

export default OrderPrice;

const OrderPriceFragment = styled.div`
  position: relative;
  width: 284px;
  @media screen and (max-width: 742px) {
    display: none;
  }
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

const OrderPriceRowKey = styled.div``;

const OrderAmount = styled.div`
  em {
    font-size: 20px;
    padding-right: 3px;
  }
`;

const OrderPriceFinal = styled.div`
  width: 100%;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: space-between;
  padding: 17px 16px 18px 18px;
  em {
    font-weight: 700;
  }
`;
