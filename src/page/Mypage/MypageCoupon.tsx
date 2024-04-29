import styled from "styled-components";

const MypageCouponContainer = styled.div`
  width: 650px;
  min-height: 270px;
  background-color: white;
`;

const Header = styled.div`
  width: 610px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  padding: 25px 0px 20px;
  border-bottom: 1.6px solid #333333;
  font-weight: 500;

  h2 {
    font-size: 20px;
    margin-right: 8px;
  }

  button {
    border: none;
    font-size: 16px;
  }
`;

const CouponWrapper = styled.div`
  width: 608px;
  height: 154px;
  padding: 16px 13px 13px 20px;
  background-color: white;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #cccccc;

  div {
    width: 575px;
  }

  h2 {
    font-size: 20px;
  }

  p:first-child {
    font-size: 15px;
    padding: 10px 0px 6px;
  }
`;

const MypageCoupon = () => {
  return (
    <MypageCouponContainer>
      <Header>
        <h2>쿠폰</h2>
        <button>+ 쿠폰 등록</button>
      </Header>
      <CouponWrapper>
        <div>
          <h2>30% 할인</h2>
          <p>뷰티 첫 구매 30% 쿠폰(최대 10,000원)</p>
          <p>최대 10,000원 할인</p>
          <p>컬리상품 한정, 특정상품 한정, 일부 상품 제외</p>
          <p>2024년 04월 30일 24시까지</p>
        </div>
      </CouponWrapper>
    </MypageCouponContainer>
  );
};

export default MypageCoupon;
