import React from "react";
import styled from "styled-components";
import GoodsMain from "../components/goods/GoodsMain";
import GoodsNav from "../components/goods/GoodsNav";
import GoodsContents from "../components/goods/GoodsContents";
import GoodsInquiry from "../components/goods/GoodsInquiry";
import GoodsReview from "../components/goods/GoodsReview";

const Goods: React.FC = () => {
  return (
    <GoodsWrap>
      <GoodsMain />
      <GoodsNav />
      <GoodsContents />
      <GoodsReview />
      <GoodsInquiry />
    </GoodsWrap>
  );
};

export default Goods;

const GoodsWrap = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: center;
`;
