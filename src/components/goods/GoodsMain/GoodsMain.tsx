import React from "react";
import styled from "styled-components";
import GoodsMainSection from "./GoodsMainSection";

const GoodsMain: React.FC = () => {
  return (
    <GoodsMainWrap>
      <GoodsMainImg>
        <img src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/a67c9c98-39a1-4018-ab75-5dc1a8402c3a.jpg" />
      </GoodsMainImg>
      <GoodsMainSection />
    </GoodsMainWrap>
  );
};

export default GoodsMain;

const GoodsMainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0px 50px;
  padding-top: 30px;
`;
const GoodsMainImg = styled.div`
  width: 430px;
  img {
    width: 100%;
    border-radius: 2%;
  }
`;
