import React from "react";
import styled from "styled-components";

const CartSelect: React.FC = () => {
  return (
    <CartSelectWrap>
      <CartSelectCheckBtn>
        <img src="/img/cart/CheckBtn.svg" />
      </CartSelectCheckBtn>
      <CartSelectAllBtn>전체선택 (1/2)</CartSelectAllBtn>
      <CartSelectContour>|</CartSelectContour>
      <CartSelectPartBtn>선택삭제</CartSelectPartBtn>
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
const CartSelectContour = styled.div`
  color: rgb(221, 221, 221);
  padding: 0 5px;
`;
const CartSelectPartBtn = styled.button``;
