import React from "react";
import { Routes, Route } from "react-router-dom";
import Goods from "./page/Goods";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* TODO Header 삽입 */}
      {/* <Header /> */}
      <Routes>
        <Route path="/goods" element={<Goods />} />
        {/* 각자 완성한 페이지 path 및 element 삽입 */}
      </Routes>
    </div>
  );
};

export default App;
