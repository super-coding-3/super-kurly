import React from "react";
import GoodsMain from "../components/goods/GoodsMain/GoodsMain";
import GoodsNav from "../components/goods/GoodsNav";
import GoodsContents from "../components/goods/GoodsContents";

const Goods: React.FC = () => {
  return (
    <>
      <GoodsMain />
      <GoodsNav />
      <GoodsContents />
    </>
  );
};

export default Goods;
