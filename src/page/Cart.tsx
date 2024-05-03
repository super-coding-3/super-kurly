import React, { useState } from "react";
import styled from "styled-components";
import CartList from "../components/cart/CartList";
import CartInfo from "../components/cart/CartInfo";
import { CartData } from "../components/common/data/CartData";

const Cart: React.FC = () => {
  const [cartData, setcartData] = useState(CartData());

  const productSelectHandler = (index: number) => {
    cartData[index].select = !cartData[index].select;
    setcartData([...cartData]);
  };

  const productDeleteHandler = (id: string) => {
    setcartData(cartData.filter((data: any) => data.id !== id));
  };

  const amountMinusHandler = (index: number, amount: number) => {
    if (amount > 1) {
      cartData[index].amount = cartData[index].amount - 1;
      setcartData([...cartData]);
    }
  };

  const amountPlusHandler = (index: number, amount: number, stock: number) => {
    if (amount < stock) {
      cartData[index].amount = cartData[index].amount + 1;
      setcartData([...cartData]);
    }
  };

  const allCheckBtnHandler = () => {
    if (cartData.some((data: any) => data.select === false)) {
      setcartData(
        cartData.map((product) => {
          return { ...product, select: true };
        })
      );
    } else {
      setcartData(
        cartData.map((product) => {
          return { ...product, select: false };
        })
      );
    }
  };

  return (
    <CartFragment>
      <CartTitle>장바구니</CartTitle>
      <CartWrap>
        <CartList
          cartData={cartData}
          productSelectHandler={productSelectHandler}
          productDeleteHandler={productDeleteHandler}
          allCheckBtnHandler={allCheckBtnHandler}
          amountMinusHandler={amountMinusHandler}
          amountPlusHandler={amountPlusHandler}
        />
        <CartInfo cartData={cartData} />
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
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  @media screen and (max-width: 1050px) {
    max-width: 742px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 540px) {
    max-width: 340px;
  }
`;
