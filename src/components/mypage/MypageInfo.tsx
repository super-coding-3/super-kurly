import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100%;
  background: white;
  height: 260px;
  padding: 26px 20px 20px 20px;
`;

const InfoWrapper = styled.div`
  width: 335px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const GradeWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #fb7c51;
  border-radius: 50%;
  color: #fb7c51;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const InfoDetailsWrpper = styled.div`
  p {
    color: #333333;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  button {
    border: none;
    color: #999999;
    font-size: 13px;
    font-weight: 400;
  }
`;

const CouponWrapper = styled.div`
  width: 335px;
  height: 42px;
  background-color: #eaf7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 12px 12px 14px;
  margin-top: 16px;

  p {
    font-size: 13px;
    font-weight: 500;
    color: #333333;
  }
`;

const PointsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  button {
    width: 166.7px;
    height: 92px;
    padding: 22px 12px 22px 20px;
    border: 1px solid #c4c4c4;
  }
`;

const RewardPointBtn = styled.button`
  border-radius: 10px 0px 0px 10px;
  text-align: left;

  p:first-child {
    font-size: 12px;
    font-weight: 400;
    color: #666666;
    padding-bottom: 8px;
  }

  span:nth-child(2) {
    font-size: 24px;
    font-weight: 700;
  }
  span:nth-child(3) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CashBtn = styled.button`
  position: relative;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  div:first-child {
    display: flex;
    align-items: center;
  }

  p:first-child {
    font-size: 12px;
    font-weight: 400;
    color: #666666;
    padding-bottom: 8px;
  }

  span:first-child {
    font-size: 24px;
    font-weight: 700;
  }
  span:nth-child(2) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Voucher = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 53px;
  height: 26px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 13px;
  background-color: #f2f2f2;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MypageSideMenu = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <GradeWrapper>일반</GradeWrapper>
        <InfoDetailsWrpper>
          <p>홍길동</p>
          <button>다음 달 등급 확인</button>
          <button>전체 등급 확인</button>
        </InfoDetailsWrpper>
      </InfoWrapper>
      <CouponWrapper>
        <p>컬리멤버스 월 1,900원으로 10배 쿠폰 받기</p>
      </CouponWrapper>
      <PointsWrapper>
        <RewardPointBtn>
          <p>적립금</p>
          <span>0</span>
          <span>원</span>
        </RewardPointBtn>
        <CashBtn>
          <div>
            <p>컬리캐시</p>
            <Voucher>상품권</Voucher>
          </div>
          <div>
            <span>0</span>
            <span>원</span>
          </div>
        </CashBtn>
      </PointsWrapper>
    </InfoContainer>
  );
};

export default MypageSideMenu;
