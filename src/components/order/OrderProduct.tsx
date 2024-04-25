import React, { useState } from "react";
import styled from "styled-components";

const OrderProduct: React.FC = () => {
  const [productDropBar, setproductDropBar] = useState(false);

  const OrderData = [
    {
      img: "https://img-cf.kurly.com/cdn-cgi/image/width=240,height=240,fit=crop,quality=85/shop/data/review/20240424/4cbbd57f-6344-4efa-8c61-c8fce2cb0be8.jpg",
      product: "[비비고] 왕교자 455G*2",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      amount: "1개",
      price: "7,150원",
    },
    {
      img: "https://img-cf.kurly.com/cdn-cgi/image/width=240,height=240,fit=crop,quality=85/shop/data/review/20240425/f82b8e12-7669-47ea-860c-b202e75ad696.jpg",
      product: "[쿳킷x비비고] 왕교자 사골 떡만두국",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      amount: "2개",
      price: "6,980원",
    },
  ];

  return (
    <OrderProductWrap>
      <OrderProductTitle>
        <div>주문 상품</div>
        <button
          onClick={() => {
            setproductDropBar(!productDropBar);
          }}
        >
          {productDropBar ? (
            <img src="/img/goods/UpArrow.svg" />
          ) : (
            <img src="/img/goods/DownArrow.svg" />
          )}
        </button>
      </OrderProductTitle>
      {productDropBar ? (
        OrderData.map((data) => {
          return (
            <OrderProductContentsDrop>
              <img src={data.img} />
              <div id="product">
                <div id="productName">{data.product}</div>
                <div id="productTitle">{data.title}</div>
              </div>
              <div>{data.amount}</div>
              <div id="price">{data.price}</div>
            </OrderProductContentsDrop>
          );
        })
      ) : (
        <OrderProductContents>
          {OrderData[0].product} 외 {OrderData.length - 1}개 상품을 주문합니다.
        </OrderProductContents>
      )}
    </OrderProductWrap>
  );
};

export default OrderProduct;

const OrderProductWrap = styled.div`
  margin-top: 48px;
  font-size: 14px;
  width: 1050px;
`;

const OrderProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(51, 51, 51);
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
  button {
    display: flex;
    align-items: center;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;

const OrderProductContents = styled.div`
  padding: 28px 0px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const OrderProductContentsDrop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
  img {
    width: 60px;
    height: 78px;
  }
  #product {
    display: flex;
    flex-direction: column;
    width: 700px;
    gap: 10px;
  }
  #productName {
    width: 700px;
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
