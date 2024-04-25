import React, { useRef } from "react";
import styled from "styled-components";

const GoodsNav: React.FC = () => {
  const navRef = useRef<any>();

  const scrollToRef = () => {
    navRef.current.scrollintoView({ behavior: "smooth" });
  };

  return (
    <GoodsNavWrap>
      <GoodsNavUl>
        <GoodsNavLi>상품설명</GoodsNavLi>
        <GoodsNavLi>상세정보</GoodsNavLi>
        <GoodsNavLi>후기 (52,049)</GoodsNavLi>
        <GoodsNavLi>문의</GoodsNavLi>
      </GoodsNavUl>
    </GoodsNavWrap>
  );
};

export default GoodsNav;

const GoodsNavWrap = styled.div`
  margin-top: 50px;
  position: sticky;
  top: 0;
`;

const GoodsNavUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1010px;
`;

const GoodsNavLi = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 60px;
`;
