import React, { useState } from "react";
import styled from "styled-components";
import CartSelect from "./CartSelect";
import { ProductData } from "../common/data/ProductData";
import OrderedProductTitle from "../common/OrderedProductTitle";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartList: React.FC = () => {
  const [productDropBar, setproductDropBar] = useState(true);

  return (
    <CartListWrap>
      <CartSelect />
      <CartProduct>
        <OrderedProductTitle
          productDropBar={productDropBar}
          setproductDropBar={setproductDropBar}
        />
        {productDropBar &&
          ProductData().map((data) => {
            return (
              <CartProductList>
                <CartListCheckBtn>
                  <img src="/img/cart/CheckBtn.svg" />
                </CartListCheckBtn>
                <CartListImg src={data.img} />
                <div id="product">
                  <div id="productName">{data.product}</div>
                  <div id="productTitle">{data.title}</div>
                </div>
                <CartListAmount>
                  <CartListAmountMinus>
                    {data.amount === 1 ? (
                      <FaMinus color="#dddddd" />
                    ) : (
                      <FaMinus />
                    )}
                  </CartListAmountMinus>
                  <div>{data.amount}</div>
                  <CartListAmountPlus>
                    <FaPlus />
                  </CartListAmountPlus>
                </CartListAmount>
                <div id="price">{data.price}</div>
                <CartListDelBtn>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==" />
                </CartListDelBtn>
              </CartProductList>
            );
          })}
      </CartProduct>
      <CartSelect />
    </CartListWrap>
  );
};

export default CartList;

const CartListWrap = styled.div`
  width: 742px;
`;

const CartProduct = styled.div`
  border-top: 1px solid rgb(51, 51, 51);
`;

const CartProductList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  width: 100%;
  border-bottom: 1px solid rgb(244, 244, 244);
  #product {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 345px;
  }
  #productName {
    font-size: 16px;
  }
  #productTitle {
    color: rgb(153, 153, 153);
  }
  #price {
    font-weight: 700;
    font-size: 16px;
  }
`;

const CartListCheckBtn = styled.button``;

const CartListImg = styled.img`
  width: 60px;
  height: 78px;
`;

const CartListAmount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 88px;
  border-radius: 3px;
  height: 30px;
`;
const CartListAmountMinus = styled.button`
  width: 13px;
  height: 13px;
`;

const CartListAmountPlus = styled.button`
  width: 13px;
  height: 13px;
`;

const CartListDelBtn = styled.button``;
