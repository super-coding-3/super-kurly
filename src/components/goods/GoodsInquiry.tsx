import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GoodsInquiry: React.FC = () => {
  const GoodsInquiryData = [
    {
      title: "무료로 팔아주실 수 있나요?",
      writer: "이효경",
      date: "2024.04.25",
      state: "답변완료",
    },
    {
      title: "네고 가능한가요?",
      writer: "홍길동",
      date: "2024.04.25",
      state: "답변완료",
    },
  ];
  return (
    <GoodsInquiryWrap>
      <GoodsInquiryTitle>
        <div>상품문의</div>
        <ul>
          <li>
            상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
            사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          </li>
          <li>
            배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
            <Link to="/"> 1:1문의</Link>에 남겨주세요.
          </li>
        </ul>
      </GoodsInquiryTitle>
      <GoodsInquiryBtn>문의하기</GoodsInquiryBtn>
      <GoodsInquiryTable>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>답변상태</th>
          </tr>
        </thead>
        <tbody>
          {GoodsInquiryData.map((data) => {
            return (
              <tr>
                <td id="title">{data.title}</td>
                <td>{data.writer}</td>
                <td>{data.date}</td>
                <td id="state">{data.state}</td>
              </tr>
            );
          })}
        </tbody>
      </GoodsInquiryTable>
    </GoodsInquiryWrap>
  );
};

export default GoodsInquiry;

const GoodsInquiryWrap = styled.div`
  position: relative;
  margin-top: 100px;
  width: 1010px;
`;

const GoodsInquiryTitle = styled.div`
  margin-bottom: 50px;
  div {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  li {
    list-style: inside;
    display: list-item;
    color: rgb(153, 153, 153);
  }
`;

const GoodsInquiryBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  width: 120px;
  text-align: center;
  line-height: 40px;
`;

const GoodsInquiryTable = styled.table`
  width: 100%;
  margin-bottom: 100px;
  thead {
    font-weight: 500;
    line-height: 58px;
    border-top: 2px solid #333;
    border-bottom: 1px solid #333;
  }
  tr {
    line-height: 64px;
    border-bottom: 1px solid rgb(244, 244, 244);
    text-align: center;
    color: rgb(153, 153, 153);
  }
  #title {
    text-align: start;
  }
  #state {
    color: rgb(95, 0, 128);
  }
`;
