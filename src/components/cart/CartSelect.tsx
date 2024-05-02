import React from "react";
import styled from "styled-components";
import { MAIN_COLOR } from "../../constans/color";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";

interface CartDataProps {
  productData: Array<object>;
  allCheckBtnHandler: Function;
}

const CartSelect: React.FC<CartDataProps> = (props) => {
  const allCheckBtnHandler = () => {
    props.allCheckBtnHandler();
  };

  return (
    <CartSelectWrap>
      <CartSelectCheckBtn onClick={allCheckBtnHandler}>
        {props.productData.reduce(
          (acc: any, curr: any) => acc + curr.select,
          0
        ) != props.productData.length ? (
          <IoIosCheckmarkCircleOutline
            color="rgb(221, 221, 221)"
            size="2.5em"
          />
        ) : (
          <IoIosCheckmarkCircle color={MAIN_COLOR} size="2.5em" />
        )}
      </CartSelectCheckBtn>
      <CartSelectAllBtn>
        전체선택 (
        {props.productData.reduce((count: any, product: any) => {
          if (product.select) {
            return count + 1;
          } else {
            return count;
          }
        }, 0)}
        /{props.productData.length})
      </CartSelectAllBtn>
    </CartSelectWrap>
  );
};

export default CartSelect;

const CartSelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  margin: 10px 0;
`;
const CartSelectCheckBtn = styled.button``;
const CartSelectAllBtn = styled.button``;
