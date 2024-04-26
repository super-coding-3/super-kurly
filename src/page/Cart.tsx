import React from "react";
import styled from "styled-components";
import CartList from "../components/cart/CartList";
import CartInfo from "../components/cart/CartInfo";

const Cart: React.FC = () => {
  return (
    <CartFragment>
      <CartTitle>장바구니</CartTitle>
      <CartWrap>
        <CartList />
        <CartInfo />
      </CartWrap>
    </CartFragment>
  );
};

export default Cart;

const CartFragment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
  font-size: 14px;
`;

const CartTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
`;

const CartWrap = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
`;
