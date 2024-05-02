import React, { useState } from "react";
import styled from "styled-components";
import CartList from "../components/cart/CartList";
import CartInfo from "../components/cart/CartInfo";
import { ProductData } from "../components/common/data/ProductData";
import axios from "axios";

interface ProductDataType {
  id: string;
  img: string;
  title: string;
  price: number;
  delivery: string;
  seller: string;
  origin: string;
  option: string;
  stock: number;
  select: boolean;
}

const Cart: React.FC = () => {
  const [cartData, setcartData] = useState<Array<object>>([]);
  const [productData, setproductData] = useState(ProductData());

  async function getCartData() {
    try {
      const res = await axios.get("http://43.203.104.198:8080/api/url");
      setcartData(res.data);
      console.log(typeof cartData);
    } catch (error) {
      console.error(error);
      alert("장바구니 조회 실패");
    }
  }

  async function deleteCartData(product_id: string) {
    try {
      await axios.delete(
        `http://43.203.104.198:8080/api//url/delete?${product_id}`
      );
      getCartData();
    } catch (error) {
      console.error(error);
      alert("장바구니 데이터 삭제 요청 실패");
    }
  }

  // 하드코딩
  const productSelectHandler = (index: number) => {
    productData[index].select = !productData[index].select;
    setproductData([...productData]);
  };

  const productDeleteHandler = (id: string) => {
    setproductData(productData.filter((data: any) => data.id !== id));
  };

  const allCheckBtnHandler = () => {
    if (productData.some((data: any) => data.select === false)) {
      setproductData(
        productData.map((product) => {
          return { ...product, select: true };
        })
      );
    } else {
      setproductData(
        productData.map((product) => {
          return { ...product, select: false };
        })
      );
    }
  };

  // 하드코딩

  return (
    <CartFragment>
      <CartTitle>장바구니</CartTitle>
      <CartWrap>
        <CartList
          productData={productData}
          productSelectHandler={productSelectHandler}
          productDeleteHandler={productDeleteHandler}
          allCheckBtnHandler={allCheckBtnHandler}
        />
        <CartInfo productData={productData} />
      </CartWrap>
    </CartFragment>
  );
};

export default Cart;

const CartFragment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
  font-size: 14px;
`;

const CartTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
`;

const CartWrap = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
`;
