import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartInfo = () => {
  return (
    <CartInfoFragment>
      <CartInfoWrap>
        <CartInfoDelivery>
          <CartInfoDeliveryTitle>
            <img src="https://res.kurly.com/pc/service/cart/2007/ico_location.svg" />
            <div>배송지</div>
          </CartInfoDeliveryTitle>
          <CartInfoDeliveryAddr>서울 마포구 어쩌구</CartInfoDeliveryAddr>
          <CartInfoDeliveryBtn>배송지 변경</CartInfoDeliveryBtn>
        </CartInfoDelivery>
        <CartInfoPrice>
          <div>결제예정금액</div>
          <div>
            <em>30,900</em>원
          </div>
        </CartInfoPrice>
        <CartInfoBtn to="/order">주문하기</CartInfoBtn>
        <CartInfoText>쿠폰/적립금은 주문서에서 사용 가능합니다</CartInfoText>
        <CartInfoText>
          [주문완료] 상태일 경우에만 주문 취소 가능합니다.
        </CartInfoText>
        <CartInfoText>
          [주문완료] 상태일 경우에만 주문 취소 가능합니다.
        </CartInfoText>
        <CartInfoText>
          [마이컬리 → 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
        </CartInfoText>
        <CartInfoText>
          쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.
        </CartInfoText>
        <CartInfoText>
          상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서
          확인 가능합니다)
        </CartInfoText>
      </CartInfoWrap>
    </CartInfoFragment>
  );
};

export default CartInfo;

const CartInfoFragment = styled.div`
  position: relative;
  width: 284px;
`;

const CartInfoWrap = styled.div`
  position: sticky;
  top: 0;
  padding-top: 60px;
`;

const CartInfoDelivery = styled.div`
  padding: 23px 19px 20px;
  border: 1px solid rgb(242, 242, 242);
  font-size: 16px;
  font-weight: 500;
`;
const CartInfoDeliveryTitle = styled.div`
  display: flex;
  line-height: 20px;
  gap: 7px;
`;

const CartInfoDeliveryAddr = styled.div`
  padding-top: 20px;
`;

const CartInfoDeliveryBtn = styled.button`
  font-size: 12px;
  margin-top: 20px;
  width: 100%;
  line-height: 36px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
`;

const CartInfoPrice = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  padding: 19px 18px 18px 20px;
  border: 1px solid rgb(242, 242, 242);
  background-color: rgb(250, 250, 250);
  em {
    font-weight: 700;
    font-size: 20px;
    margin-right: 5px;
  }
`;

const CartInfoBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-weight: 700;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
`;

const CartInfoText = styled.div`
  font-size: 12px;
  padding-top: 4px;
  color: rgb(102, 102, 102);

  &::before {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 6px 0px 0px -6px;
    background: rgb(153, 153, 153);
    vertical-align: top;
    border-radius: 50%;
    content: "";
  }
`;
