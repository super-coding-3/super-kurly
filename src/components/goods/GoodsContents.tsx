import React from "react";
import styled from "styled-components";
import GoodsDescription from "./GoodsDescription";
import GoodsDetail from "./GoodsDetail";

const GoodsContents: React.FC = () => {
  return (
    <GoodsContentsWrap>
      <GoodsDescription />
      <GoodsDetail />
    </GoodsContentsWrap>
  );
};

export default GoodsContents;

const GoodsContentsWrap = styled.div`
  margin-top: 40px;
  width: 1010px;
`;
