import React from "react";
import styled from "styled-components";
// import RightArrow from "../../../../public/img/goods/RightArrow.svg";

const GoodsMainSection: React.FC = () => {
  return (
    <GoodsMainSectionWrap>
      <GoodsDelivery>샛별배송</GoodsDelivery>
      <GoodsTitle>
        <h1>[비비고x고메] 간편식 골라담기 9종 (택1)</h1>
        <h2>CJ 인기 상품 모아보기</h2>
        <button></button>
      </GoodsTitle>
      <GoodsDiscountPrice>
        <div id="persent">35%</div>
        <div id="price">7,150</div>
        <div id="won">원~</div>
      </GoodsDiscountPrice>
      <GoodsRegularPrice>
        <div>11,000원</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="6.9"
              stroke="#ccc"
              stroke-width="1.2"
            ></circle>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.19735 8.7317H7.80005C7.84762 7.32251 8.81681 6.2998 10.5828 6.2998C12.2119 6.2998 13.3 7.23926 13.3 8.55332C13.3 9.46305 12.8482 10.0993 12.0395 10.5809C11.2606 11.0387 11.0406 11.342 11.0406 11.9306V12.2695H9.66113L9.65518 11.8652C9.60167 10.9733 9.94654 10.4382 10.7671 9.95656L10.9414 9.84757C11.5443 9.45619 11.7541 9.14643 11.7541 8.60683C11.7541 7.98845 11.2546 7.54251 10.5055 7.54251C9.73843 7.54251 9.24491 8.00629 9.19735 8.7317ZM9.42924 14.1603C9.42924 14.7312 9.82167 15.1058 10.4163 15.1058C11.0228 15.1058 11.4033 14.7312 11.4033 14.1603C11.4033 13.5836 11.0228 13.209 10.4163 13.209C9.82167 13.209 9.42924 13.5836 9.42924 14.1603Z"
              fill="#CCCCCC"
            ></path>
          </svg>
        </button>
      </GoodsRegularPrice>
      <GoodsOrigin>원산지: 상품설명/상세정보 참조</GoodsOrigin>
      <GoodsAccumulate>
        <div id="percent">웰컴 5%</div>
        <div id="bar">|</div>
        <div>개당</div>
        <div id="accumulate">358원 적립</div>
      </GoodsAccumulate>
      <GoodsMemberShipBtn>
        <div>컬리멤버스 지금 시작하면 3개월 0원</div>
        <img src={process.env.PUBLIC_URL + "/img/goods/RightArrow.svg"} />
      </GoodsMemberShipBtn>
      <GoodsCouponBtn>
        <div>CJ브랜드위크 5천원 쿠폰 받기</div>
      </GoodsCouponBtn>
      <GoodsInfo />
      <GoodsPurchase />
    </GoodsMainSectionWrap>
  );
};
export default GoodsMainSection;

const GoodsMainSectionWrap = styled.div`
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
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const GoodsTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: rgb(51, 51, 51);
  }
  h2 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(181, 181, 181);
  }

  button {
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
      50% 50% no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
  }
`;

const GoodsDiscountPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-top: 30px;
  font-weight: 700;
  #persent {
    margin-right: 9px;
    font-size: 28px;
    color: rgb(250, 98, 47);
  }

  #price {
    margin-right: 4px;
    font-size: 28px;
    color: rgb(51, 51, 51);
  }

  #won {
    font-size: 18px;
    color: rgb(51, 51, 51);
  }
`;

const GoodsRegularPrice = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  div {
    font-size: 16px;
    color: rgb(181, 181, 181);
    text-decoration: line-through;
    margin-right: 2px;
    padding-top: 1.5px;
  }
  button {
    width: 21px;
    position: relative;
  }
  svg {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

const GoodsOrigin = styled.div`
  color: #333;
  font-size: 24px;
  letter-spacing: -0.5px;
  margin-top: 20px;
`;

const GoodsAccumulate = styled.div`
  display: flex;
  margin-top: 14px;
  div {
    color: rgb(51, 51, 51);
  }

  #percent {
    font-weight: 500;
    font-size: 14px;
    color: rgb(153, 153, 153);
  }
  #bar {
    margin: 0 3px;
    font-size: 14px;
    color: rgba(225, 225, 225, 1);
  }
  #accumulate {
    margin-left: 3px;
    font-weight: 700;
  }
`;

const GoodsMemberShipBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px 14px 10px 16px;
  background-color: rgba(189, 118, 255, 0.08);
  div {
    color: #5f0080;
    font-weight: 700;
  }
`;

const GoodsCouponBtn = styled.div``;

const GoodsInfo = styled.div``;

const GoodsPurchase = styled.div``;
