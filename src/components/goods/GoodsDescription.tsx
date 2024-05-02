import React from "react";
import styled from "styled-components";

const GoodsDescription: React.FC = () => {
  return (
    <GoodsDescriptionWrap>
      <img src="https://img-cf.kurly.com/cdn-cgi/image/width=1010,quality=90/shop/data/goodsview/20240411/gv00000815106_1.jpg"></img>
      <div>
        <h3>
          <small>취향따라 골라 담는 인기 메뉴 </small> <br />
          [비비고x고메] <br />
          간편식 골라담기 9종
        </h3>
        <p>
          완성도 높은 맛으로 사랑받는 CJ의 간편식 브랜드, 비비고와 고메의 인기
          상품을 한 번에 만나 보세요. 자타공인 만두의 정석, 비비고 왕교자부터
          두루두루 활용하기 좋은 국물 요리는 물론이고요. 온 가족이 좋아하는
          반찬인 너겟과 고기 완자, 쭉 늘어나는 치즈가 기분 좋은 핫도그와
          피자까지 다채롭게 구성했답니다. 이번 기회에 든든하게 구비해 두고
          필요할 때마다 하나씩 꺼내 사용해 보세요.
        </p>
      </div>
    </GoodsDescriptionWrap>
  );
};

export default GoodsDescription;

const GoodsDescriptionWrap = styled.div`
  margin-top: 40px;
  width: 1010px;
  @media screen and (max-width: 1050px) {
    width: 742px;
  }
  @media screen and (max-width: 742px) {
    width: 560px;
  }
  @media screen and (max-width: 560px) {
    width: 340px;
  }
  h3 {
    margin: 75px 0px 0px;
    padding-bottom: 35px;
    font-size: 38px;
    line-height: 46px;
    text-align: center;
    border-bottom: 1px solid rgb(193, 193, 193);
    color: rgb(102, 102, 102);
    small {
      font-size: 24px;
      margin-bottom: 14px;
      line-height: 15px;
    }
  }
  p {
    margin-top: 28px;
    font-size: 18px;
    line-height: 32px;
    color: rgb(55, 55, 55);
  }
  img {
    width: 100%;
  }
`;
