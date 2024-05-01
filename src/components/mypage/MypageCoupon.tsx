import styled from "styled-components";
import { MAIN_COLOR } from "../../constans/color";
import { useState } from "react";

const MypageCouponContainer = styled.div`
  width: 650px;
  min-height: 270px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CouponContainer = styled.div`
  width: 608px;
  height: 154px;
  padding: 16px 13px 13px 20px;
  background-color: white;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #cccccc;

  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  p:nth-child(2) {
    font-size: 15px;
    padding: 10px 0px 6px;
    font-weight: 600;
  }

  p:nth-child(3) {
    font-size: 13px;
    color: #666666;
    margin-top: 8px;
    margin-bottom: 2px;
  }

  p:nth-child(4) {
    font-size: 13px;
    color: #666666;
  }
`;

const CouponWrapper = styled.div`
  width: 575px;
`;

const ConditionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0px 0px;

  p {
    font-size: 13px;
    color: ${MAIN_COLOR};
    font-weight: 500;
  }

  button {
    font-size: 12px;
    color: #666666;
    text-decoration-line: underline;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const PopupContainer = styled.div`
  width: 440px;
  background-color: white;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 9999;
  border-radius: 15px;
`;
const PopupHeader = styled.div`
  width: 100%;
  height: 59px;
  padding: 24px 30px 0px;
  font-size: 24px;
  color: #333333;
`;
const PoupupContent = styled.div`
  width: 100%;
  height: 201px;
  padding: 24px 30px 40px;

  h3 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 10px;
  }

  li {
    font-size: 16px;
    padding: 5px 0px 0px;
    color: #666666;
    letter-spacing: 0.5px;
  }
`;
const PopupConfirmBtn = styled.button`
  width: 100%;
  height: 55px;
  font-size: 16px;
  color: ${MAIN_COLOR};
  border-top: 1px solid #fbfbfa;
`;

const MypageCoupon = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "";
  };

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <MypageCouponContainer>
      <Header>
        <h2>쿠폰</h2>
        <button>+ 쿠폰 등록</button>
      </Header>
      <CouponContainer>
        <CouponWrapper>
          <h2>30% 할인</h2>
          <p>뷰티 첫 구매 30% 쿠폰(최대 10,000원)</p>
          <p>최대 10,000원 할인</p>
          <p>컬리상품 한정, 특정상품 한정, 일부 상품 제외</p>
          <ConditionWrapper>
            <p>2024년 04월 30일 24시까지</p>
            <button onClick={handlePopupOpen}>사용조건 보기</button>
          </ConditionWrapper>
        </CouponWrapper>
      </CouponContainer>
      {isPopupOpen && (
        <Backdrop onClick={handleClickOutside}>
          <PopupContainer>
            <PopupHeader>
              <h2>사용조건</h2>
            </PopupHeader>
            <PoupupContent>
              <h3>아래 대상에 쿠폰혜택이 적용됩니다.</h3>
              <li>유아동</li>
              <li>스킨케어</li>
              <li>남성</li>
              <li>구강,위생용품</li>
              <li>메이크업</li>
            </PoupupContent>
            <PopupConfirmBtn onClick={handlePopupClose}>확인</PopupConfirmBtn>
          </PopupContainer>
        </Backdrop>
      )}
    </MypageCouponContainer>
  );
};

export default MypageCoupon;
