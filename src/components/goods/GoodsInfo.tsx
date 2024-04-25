import React from "react";
import styled from "styled-components";

const GoodsInfo: React.FC = () => {
  const GoodsInfoData = [
    {
      delivery: "샛별배송",
      deliveryDetail:
        "23시 전 주문 시 내일 아침 7시 전 도착\n(대구·부산·울산 샛별배송 운영시간 별도 확인)",
      seller: "컬리",
      packagingType: "냉동 (종이포장)",
      packagingTypeDetail: "택배배송은 에코 포장이 스티로폼으로 대체됩니다.",
      salesUnit: "1개",
      volume: "상품설명/상세정보 참조",
      allergy:
        "옵션별 알러지 유발 물질이 상이하므로 제품 페이지 하단 한글표시사항 확인 부탁드립니다.",
      expirationDate: "옵션별 상이",
    },
  ];

  return (
    <>
      {GoodsInfoData.map((data) => {
        return (
          <GoodsInfoWrap>
            <GoodsInfoLi>
              <GoodsInfoDt>배송</GoodsInfoDt>
              <GoodsInfoDd>
                <div>{data.delivery}</div>
                <div className="detail">{data.deliveryDetail}</div>
              </GoodsInfoDd>
            </GoodsInfoLi>
            <GoodsInfoLi>
              <GoodsInfoDt>판매자</GoodsInfoDt>
              <GoodsInfoDd>{data.seller}</GoodsInfoDd>
            </GoodsInfoLi>
            <GoodsInfoLi>
              <GoodsInfoDt>포장타입</GoodsInfoDt>
              <GoodsInfoDd>
                <div>{data.packagingType}</div>
                <div className="detail">{data.packagingTypeDetail}</div>
              </GoodsInfoDd>
            </GoodsInfoLi>
            <GoodsInfoLi>
              <GoodsInfoDt>판매단위</GoodsInfoDt>
              <GoodsInfoDd>{data.salesUnit}</GoodsInfoDd>
            </GoodsInfoLi>
            <GoodsInfoLi>
              <GoodsInfoDt>중량/용량</GoodsInfoDt>
              <GoodsInfoDd>{data.volume}</GoodsInfoDd>
            </GoodsInfoLi>
            <GoodsInfoLi>
              <GoodsInfoDt>알레르기정보</GoodsInfoDt>
              <GoodsInfoDd>{data.allergy}</GoodsInfoDd>
            </GoodsInfoLi>
            <GoodsInfoLi>
              <GoodsInfoDt>소비기한(또는 유통기한)정보</GoodsInfoDt>
              <GoodsInfoDd>{data.expirationDate}</GoodsInfoDd>
            </GoodsInfoLi>
          </GoodsInfoWrap>
        );
      })}
    </>
  );
};

export default GoodsInfo;

const GoodsInfoWrap = styled.ul`
  border-bottom: 1px solid rgb(244, 244, 244);
  margin-top: 20px;
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
