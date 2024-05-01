import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

interface AmountProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  stock: number;
}

const OrderedProductAmount: React.FC<AmountProps> = (props) => {
  const amountMinusHandler = () => {
    if (props.amount > 1) props.setAmount(props.amount - 1);
  };

  const amountPlusHandler = () => {
    if (props.amount < props.stock) props.setAmount(props.amount + 1);
  };

  return (
    <CartListAmount>
      <CartListAmountMinus onClick={amountMinusHandler}>
        {props.amount === 1 ? <FaMinus color="#dddddd" /> : <FaMinus />}
      </CartListAmountMinus>
      <div>{props.amount}</div>
      <CartListAmountPlus onClick={amountPlusHandler}>
        {props.amount === props.stock ? <FaPlus color="#dddddd" /> : <FaPlus />}
      </CartListAmountPlus>
    </CartListAmount>
  );
};

export default OrderedProductAmount;

const CartListAmount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 88px;
  border-radius: 3px;
  height: 30px;
`;
const CartListAmountMinus = styled.button`
  width: 13px;
  height: 13px;
`;

const CartListAmountPlus = styled.button`
  width: 13px;
  height: 13px;
`;
