import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface OrderedProductTitleProps {
  productDropBar: boolean;
  setproductDropBar: Dispatch<SetStateAction<boolean>>;
}

const OrderedProductTitle: React.FC<OrderedProductTitleProps> = (props) => {
  return (
    <OrderedProductTitleWrap>
      <div>주문 상품</div>
      <button
        onClick={() => {
          props.setproductDropBar(!props.productDropBar);
        }}
      >
        {props.productDropBar ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </OrderedProductTitleWrap>
  );
};

export default OrderedProductTitle;

const OrderedProductTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(51, 51, 51);
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
  button {
    display: flex;
    align-items: center;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;
