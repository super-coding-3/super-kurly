import React from "react";
import OrderTitle from "./OrderTitle";
import styled from "styled-components";

const OrderPrivacy: React.FC = () => {
  return (
    <OrderPrivacyWrap>
      <OrderTitle title="결제 동의" />
      <OrderPrivacyAgree>
        아래 내용을 확인 하였으며 결제에 동의합니다.
      </OrderPrivacyAgree>
      <OrderPrivacyText>
        ※ 주문완료 상태일 경우에만 주문 취소가 가능하며, 상품 미배송 시 결제하신
        수단으로 환불됩니다.
      </OrderPrivacyText>
      <OrderPrivacyText>
        ※ 슈퍼컬리 내 개별 판매자가 등록한 오픈마켓 상품의 경우 컬리는
        통신판매중개자로서 주문, 품질, 교환/환불 등 의무와 책임을 부담하지
        않습니다.
      </OrderPrivacyText>
    </OrderPrivacyWrap>
  );
};

export default OrderPrivacy;

const OrderPrivacyWrap = styled.div`
  margin-top: 75px;
  width: 100%;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const OrderPrivacyAgree = styled.div`
  font-weight: 700;
  margin: 20px 0;
`;

const OrderPrivacyText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: rgb(102, 102, 102);
`;
