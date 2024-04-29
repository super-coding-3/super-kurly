import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
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
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
