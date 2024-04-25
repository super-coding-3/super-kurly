import React from "react";
import styled from "styled-components";

const GoodsPurchase: React.FC = () => {
  return (
    <>
      <GoodsPurchaseDrop>
        <div>상품 선택</div>
        <button>
          <div>상품을 선택해주세요</div>
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropDownIcon"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </button>
      </GoodsPurchaseDrop>
      <GoodsPurchasePrice>
        총 상품금액 : <em>0원</em>
      </GoodsPurchasePrice>
      <GoodsPurchaseAccumulate>
        <div id="accumulateBtn">적립</div>
        <div>
          구매 시 <strong>0원 적립</strong>
        </div>
      </GoodsPurchaseAccumulate>
      <GoodsPurchaseButton>
        <button className="likeitAlarmBtn">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" />
        </button>
        <button className="likeitAlarmBtn">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
        </button>
        <button className="basketBtn">장바구니 담기</button>
      </GoodsPurchaseButton>
    </>
  );
};

export default GoodsPurchase;

const GoodsPurchaseDrop = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgb(244, 244, 244);
  padding: 17px 0px 18px;
  div {
    width: 150px;
    color: rgb(102, 102, 102);
    font-weight: 400;
    text-align: start;
  }
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(221, 221, 221);
    padding: 10px 12px;
    font-size: 12px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const GoodsPurchasePrice = styled.div`
  text-align: end;
  font-size: 13px;
  font-weight: 500;
  margin-top: 30px;
  em {
    font-size: 32px;
  }
`;

const GoodsPurchaseAccumulate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  #accumulateBtn {
    background-color: rgb(255, 191, 0);
    margin: 1px 6px 0px 0px;
    padding: 0px 7px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    line-height: 20px;
  }
  strong {
    font-weight: 600;
    color: rgb(102, 102, 102);
  }
`;

const GoodsPurchaseButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  .likeitAlarmBtn {
    width: 56px;
    height: 56px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 3px;
    padding: 0px 10px;
  }
  .basketBtn {
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-weight: 700;
  }
`;
