import React from "react";
import { Routes, Route } from "react-router-dom";
import Goods from "./page/Goods";
import ProductSellList from "./components/goods/ProductsSellList/ProductSellList";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* TODO Header 삽입 */}
      {/* <Header /> */}
      <Routes>
        <Route path="/goods" element={<Goods />} />
        <Route path="/productSellList" element={<ProductSellList/>} />
        {/* 각자 완성한 페이지 path 및 element 삽입 */}
      </Routes>
    </div>
  );
};

export default App;
