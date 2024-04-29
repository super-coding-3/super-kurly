import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Goods from "./page/Goods";
import Main from "./page/Main";
import ProductSellList from "./components/ProductsSellList/ProductSellList";
import Order from "./page/Order";
import Cart from "./page/Cart";
import Mypage from "./page/Mypage/Mypage";
import MypageOrder from "./page/Mypage/MypageOrder";
import MypageCoupon from "./page/Mypage/MypageCoupon";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* TODO Header 삽입 */}
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/" element={<Main />} />
        <Route path="/productSellList" element={<ProductSellList />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/order" element={<MypageOrder />} />
        <Route path="/mypage/coupon" element={<MypageCoupon />} />
        {/* 각자 완성한 페이지 path 및 element 삽입 */}
      </Routes>
    </div>
  );
};

export default App;
