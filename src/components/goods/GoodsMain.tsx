import React, { useState } from "react";
import styled from "styled-components";
import { MAIN_COLOR } from "../../constans/color";
import OrderedProductAmount from "../common/OrderedProductAmount";
import axios from "axios";
import { Link } from "react-router-dom";

const GoodsMain: React.FC = () => {
  const [goodsAmount, setgoodsAmount] = useState(1);

  axios({
    method: "get",
    url: `http://43.203.104.198:8080/`,
  })
    .then((result) => {
      console.log("get요청성공");
      console.log(result);
    })
    .catch((error) => {
      console.log("요청실패");
      console.log(error);
    });
  const GoodsData = [
    {
      img: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/a67c9c98-39a1-4018-ab75-5dc1a8402c3a.jpg",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      price: 7150,
      delivery: "샛별배송",
      seller: "컬리",
      origin: "상품설명/상세정보 참조",
      option: "간편식1",
      stock: 10,
    },
  ];

  const goodsPriceComma = GoodsData[0].price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const goodsPriceTotalComma = (GoodsData[0].price * goodsAmount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <GoodsMainWrap>
      <GoodsMainImg>
        <img src={GoodsData[0].img} />
      </GoodsMainImg>
      <GoodsMainSection>
        <GoodsDelivery>샛별배송</GoodsDelivery>
        <GoodsTitle>
          <div>{GoodsData[0].title}</div>
        </GoodsTitle>
        <GoodsDiscountPrice>
          <div>
            <em>{goodsPriceComma}</em>원
          </div>
        </GoodsDiscountPrice>
        <GoodsOrigin>원산지: {GoodsData[0].origin}</GoodsOrigin>
        <GoodsInfo>
          <GoodsInfoLi>
            <GoodsInfoDt>배송</GoodsInfoDt>
            <GoodsInfoDd>
              <div>{GoodsData[0].delivery}</div>
            </GoodsInfoDd>
          </GoodsInfoLi>
          <GoodsInfoLi>
            <GoodsInfoDt>판매자</GoodsInfoDt>
            <GoodsInfoDd>{GoodsData[0].seller}</GoodsInfoDd>
          </GoodsInfoLi>
        </GoodsInfo>
        <GoodsPurchase>
          <GoodsPurchaseChoice>
            <GoodsPurchaseChoiceDt>상품 선택</GoodsPurchaseChoiceDt>
            <GoodsPurchaseChoiceDd>
              <div>{GoodsData[0].option}</div>
              <OrderedProductAmount
                amount={goodsAmount}
                setAmount={setgoodsAmount}
                stock={GoodsData[0].stock}
              />
            </GoodsPurchaseChoiceDd>
          </GoodsPurchaseChoice>
          <GoodsPurchasePrice>
            총 상품금액 : <em>{goodsPriceTotalComma}</em> 원
          </GoodsPurchasePrice>
          <GoodsPurchaseButton to="/cart">장바구니 담기</GoodsPurchaseButton>
        </GoodsPurchase>
      </GoodsMainSection>
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
  width: 400px;
  img {
    width: 100%;
    border-radius: 2%;
  }
`;

const GoodsMainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  width: 560px;
  font-size: 14px;
`;

const GoodsDelivery = styled.div`
  color: rgb(153, 153, 153);
  margin-bottom: 20px;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

const GoodsTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 51, 51);

  /* button {
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
      50% 50% no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
  } */
`;

const GoodsDiscountPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin: 30px 0;
  font-weight: 700;
  font-size: 18px;
  color: rgb(51, 51, 51);

  em {
    margin-right: 4px;
    font-size: 28px;
    color: rgb(51, 51, 51);
  }
`;

const GoodsOrigin = styled.div`
  color: #333;
  font-size: 24px;
  letter-spacing: -0.5px;
`;

const GoodsInfo = styled.ul`
  border-bottom: 1px solid rgb(244, 244, 244);
  margin-top: 30px;
`;
const GoodsInfoLi = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  border-top: 1px solid rgb(244, 244, 244);
  padding: 17px 0px 18px;
`;
const GoodsInfoDt = styled.dt`
  width: 150px;
  color: rgb(102, 102, 102);
  font-weight: 400;
`;
const GoodsInfoDd = styled.dd`
  white-space: pre-line;
  width: 100%;
  .detail {
    color: rgb(102, 102, 102);
    font-size: 12px;
    margin-top: 3px;
    line-height: 16px;
  }
`;

const GoodsPurchase = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoodsPurchaseChoice = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgb(244, 244, 244);
  padding: 17px 0px 18px;
`;

const GoodsPurchaseChoiceDt = styled.div`
  width: 150px;
  color: rgb(102, 102, 102);
  font-weight: 400;
  text-align: start;
`;

const GoodsPurchaseChoiceDd = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  padding: 10px 12px;
  font-size: 12px;
`;

const GoodsPurchasePrice = styled.div`
  text-align: end;
  font-size: 13px;
  font-weight: 500;
  margin-top: 20px;
  em {
    font-size: 32px;
  }
`;

const GoodsPurchaseButton = styled(Link)`
  margin-top: 20px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${MAIN_COLOR};
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
