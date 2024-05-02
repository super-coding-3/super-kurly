import React from "react";
import styled from "styled-components";
import GoodsMain from "../components/goods/GoodsMain";
import GoodsDetail from "../components/goods/GoodsDetail";
import GoodsDescription from "../components/goods/GoodsDescription";
import axios from "axios";

const Goods: React.FC = () => {
  return (
    <GoodsWrap>
      <GoodsMain />
      <GoodsNav>
        <GoodsNavList>
          <GoodsNavBtn href="#GoodsDescription">상품설명</GoodsNavBtn>
          <GoodsNavBtn href="#GoodsDetail">상세정보</GoodsNavBtn>
        </GoodsNavList>
      </GoodsNav>
      <div id="GoodsDescription">
        <GoodsDescription />
      </div>
      <div id="GoodsDetail">
        <GoodsDetail />
      </div>
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

const GoodsNav = styled.div`
  margin-top: 50px;
  position: sticky;
  top: 0;
`;

const GoodsNavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1010px;
`;

const GoodsNavBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 60px;
  color: rgb(102, 102, 102);
`;
