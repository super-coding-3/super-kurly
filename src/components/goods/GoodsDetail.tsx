import React from "react";
import styled from "styled-components";

const GoodsDetail: React.FC = () => {
  return (
    <GoodsDetailWrap>
      <GooodsDetailImg>
        <img
          src="https://img-cf.kurly.com/cdn-cgi/image/width=1010,quality=90/shop/data/goodsview/20240411/gv10000815108_1.jpg"
          alt="자세히보기 이미지"
        />
      </GooodsDetailImg>
      <GoodsDetailInfo>
        <h3>상세 정보</h3>
        <ul>
          <li className="title">배송</li>
          <li className="contents">샛별배송</li>
          <li className="title">판매자</li>
          <li className="contents">컬리</li>
        </ul>
      </GoodsDetailInfo>
    </GoodsDetailWrap>
  );
};

export default GoodsDetail;

const GoodsDetailWrap = styled.div`
  margin-top: 100px;
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
`;

const GooodsDetailImg = styled.div`
  margin-top: 50px;
  text-align: center;
  img {
    width: 60%;
  }
`;

const GoodsDetailInfo = styled.div`
  padding: 70px 0;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  h3 {
    font-weight: 500;
    font-size: 28px;
    text-align: center;
    color: rgb(102, 102, 102);
  }
  ul {
    display: flex;
    margin-top: 30px;
    font-size: 13px;
    color: rgb(51, 51, 51);
    width: 100%;
  }
  li {
    padding: 18px 18px;
    @media screen and (max-width: 560px) {
      padding: 10px 10px;
    }
  }
  .title {
    width: 18%;
    background-color: rgb(247, 247, 247);
  }
  .contents {
    width: 32%;
  }
`;
