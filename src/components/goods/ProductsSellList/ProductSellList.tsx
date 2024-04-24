import React from "react";
import styled from "styled-components";

const ProductSellList: React.FC = () => {
  return (
    <div>
      <NavDivs></NavDivs>
      <BodyDivs>
        <InfoListDiv>
          <InfoListDivs>
            <InfoDivs>
              <MyAccountDiv>
                <LevelDiv>웰컴</LevelDiv>
                <NameDiv>
                  <NameStrong>박우혁님</NameStrong>
                  <GradeConfirmDiv>
                    <GradeButton>다음달 등급 확인</GradeButton>
                    <GradeSpan></GradeSpan>
                    <GradeButton>전체 등급 확인</GradeButton>
                  </GradeConfirmDiv>
                </NameDiv>
              </MyAccountDiv>
              <CurlyBannerDiv>
                <CurlyP>적립 5% </CurlyP>
                <CurlyP>최초 1회 무료배송</CurlyP>
                <CurlyBannerA href="https://www.kurly.com/member/membership">
                  <CurlyBannerAdiv>
                    <CurlyBannerAspan>N</CurlyBannerAspan>
                    컬리맴버스 월 1,900원으로 10배 쿠폰받기
                  </CurlyBannerAdiv>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="16px"
                    height="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </CurlyBannerA>
              </CurlyBannerDiv>
              <div></div>
            </InfoDivs>
            <MenuDivs></MenuDivs>
            <BannerDiv></BannerDiv>
            <OtherListDiv></OtherListDiv>
          </InfoListDivs>
        </InfoListDiv>
        <SellListDiv></SellListDiv>
      </BodyDivs>
      <BottomDivs></BottomDivs>
    </div>
  );
};

export default ProductSellList;

const NavDivs = styled.div`
  width: 100%;
  height: 156px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;
const BodyDivs = styled.div`
  width: 100%;
  height: 1475.8px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 0px 80px;
  gap: 20px;
`;

const InfoListDiv = styled.div`
  width: 375px;
  height: 100%;
  box-sizing: border-box;
`;
const InfoListDivs = styled.div`
  width: 375px;
  height: 100%;
  box-sizing: border-box;
`;
const InfoDivs = styled.div`
  width: 375px;
  height: 289.6px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0px 0px 8px;
  padding: 26px 20px 20px;
`;
const LevelDiv = styled.div`
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 2px;
  border-radius: 100%;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid rgb(148, 146, 150);
  background-color: rgb(255, 255, 255);
  color: rgb(148, 146, 150);
  text-align: center;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 50%;
  min-height: 50px;
  margin-left: 14px;
`;
const NameStrong = styled.div`
  display: block;
  overflow: hidden;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const GradeConfirmDiv = styled.div`
  display: flex;
  align-items: center;
`;
const GradeButton = styled.button`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: rgb(153, 153, 153);
  padding: 0px;
`;

const GradeSpan = styled.span`
  width: 3px;
  height: 3px;
  margin: 0px 5px;
  border-radius: 100%;
  background-color: rgb(217, 217, 217);
`;
const CurlyBannerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 8px;
  padding-top: 16px;
  a{
    text-decoration: none;
    color: black;
  }
`;
const CurlyP = styled.p`
  position: relative;
  padding-right: 8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
`;

const CurlyBannerA = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 12px 12px 14px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  word-break: keep-all;
  background-color: rgb(234, 247, 250);
  text-decoration: none;
`;

const CurlyBannerAdiv = styled.div`
  display: flex;
  align-items: center;
`;

const CurlyBannerAspan = styled.span`
  min-width: 18px;
  height: 18px;
  margin-right: 6px;
  border-radius: 100%;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.3px;
  background-color: rgb(77, 190, 215);
  color: rgb(255, 255, 255);
  text-align: center;
`;

const MyAccountDiv = styled.div`
  width: 335px;
  height: 50px;
  display: flex;
`;

const MenuDivs = styled.div`
  width: 375px;
  height: 294px;
  box-sizing: border-box;
  padding: 20px 25px;
`;
const BannerDiv = styled.div`
  width: 375px;
  height: 73px;
  box-sizing: border-box;
  padding: 0px 25px 20px;
`;
const OtherListDiv = styled.div`
  width: 375px;
  height: 681.2px;
  box-sizing: border-box;
  padding: 0px 25px;
`;

const SellListDiv = styled.div`
  width: 650px;
  height: 100%;
`;
const BottomDivs = styled.div`
  width: 100%;
  height: 534px;
  border-top: 1px solid gray;
`;
