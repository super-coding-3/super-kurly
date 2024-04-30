import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import MainMenu from "../main/MainMenu";
const ProductSellList: React.FC = () => {
  interface FindListData {
    alt: string;
    src: string;
    text: string;
    href?: string;
    id: number;
  }

  interface FindListDataTwo {
    id: number;
    text: string;
  }

  interface FindListContentData {
    id: number;
    title: string;
    price: number;
    src: string;
  }

  const FindListData: FindListData[] = [
    {
      id: 1,
      src: "/img/ProductsSellList/Bill.svg",
      text: "주문 내역",
      alt: "bill",
    },
    {
      id: 2,
      src: "/img/ProductsSellList/Ticket.svg",
      text: "쿠폰",
      alt: "bill",
    },
    {
      id: 3,
      src: "/img/ProductsSellList/Heart.svg",
      text: "찜한 상품",
      alt: "bill",
    },
    {
      id: 4,
      src: "/img/ProductsSellList/Bill.svg",
      text: "내 판매 상품",
      alt: "bill",
    },
    {
      id: 5,
      src: "/img/ProductsSellList/Bill.svg",
      text: "판매 상품 등록",
      alt: "bill",
    },
  ];

  const FindListDatas: FindListDataTwo[] = [
    { id: 1, text: "결제수단 · 컬리페이" },
    { id: 2, text: "상품 후기" },
    { id: 3, text: "선물 내역" },
    { id: 4, text: "상품 문의" },
  ];

  const FindListDatasTwo: FindListDataTwo[] = [
    { id: 1, text: "배송지 관리" },
    { id: 2, text: "나의 컬리스타일" },
    { id: 3, text: "개인정보 수정" },
  ];

  const FindListContentData: FindListContentData[] = [
    {
      id: 1,
      title: "이쁜 강아지",
      price: 1000000,
      src: "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    },
    {
      id: 2,
      title: "이쁜 강아지",
      price: 1000000,
      src: "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    },
  ];

  return (
    <div>
      <MainMenu></MainMenu>
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
                <CurlyPTwo>최초 1회 무료배송</CurlyPTwo>
                <CurlyBannerA to="https://www.kurly.com/member/membership">
                  <CurlyBannerAdiv>
                    <CurlyBannerAspan>N</CurlyBannerAspan>
                    컬리맴버스 월 1,900원으로 10배 쿠폰받기
                  </CurlyBannerAdiv>
                  <img src="/img/ProductsSellList/Right.svg" />
                </CurlyBannerA>
              </CurlyBannerDiv>
              <PointDiv>
                <PointDivOne>
                  <PointButton>
                    <Point>적립금</Point>
                    <Cashdiv>
                      <CashStrong>0</CashStrong>원
                    </Cashdiv>
                  </PointButton>
                </PointDivOne>
                <PointDivTwo>
                  <PointButtonTwo>
                    <Point>컬리캐시</Point>
                    <Cashdiv>
                      <CashStrong>0</CashStrong>원
                    </Cashdiv>
                  </PointButtonTwo>
                  <GiftCardButton>상품권</GiftCardButton>
                </PointDivTwo>
              </PointDiv>
            </InfoDivs>
            <MenuDivs>
              <GreyFont>자주찾는 메뉴</GreyFont>
              <FindListsDiv>
                {FindListData.map((item, index) => (
                  <FindListA
                    key={item.id}
                    to={item.id === 4 ? "/productSellList" : "/"}
                  >
                    <img src={item.src} alt={item.alt} />
                    <FindListFontDiv>{item.text}</FindListFontDiv>
                  </FindListA>
                ))}
              </FindListsDiv>
            </MenuDivs>
            <BannerDiv>
              <BannerA to="https://www.kurly.com/shop/event/kurlyEventV2.php?lego=event/2023/0911/join/coupon">
                <BannerImg src="https://product-image.kurly.com/cdn-cgi/image/width=1150,quality=85,format=auto/banner/da-banner/4962e7bf-b76f-467d-aed1-8ef0764048e8.png"></BannerImg>
              </BannerA>
            </BannerDiv>
            <OtherListDiv>
              <ShoppingListDivs>
                <GreyFont>쇼핑</GreyFont>
                {FindListDatas.map((item) => (
                  <FindListA to="/" key={item.id}>
                    <FindListFontDivTwo>{item.text}</FindListFontDivTwo>
                  </FindListA>
                ))}
              </ShoppingListDivs>
              <BenefitDivs>
                <GreyFont>혜택</GreyFont>
                <FindListA to="/">
                  <FindListFontDivTwo>컬리멤버스</FindListFontDivTwo>
                </FindListA>
              </BenefitDivs>
              <AccountSettingDivs>
                <GreyFont>내 정보관리</GreyFont>
                {FindListDatasTwo.map((item) => (
                  <FindListA key={item.id} to="/">
                    <FindListFontDivTwo>{item.text}</FindListFontDivTwo>
                  </FindListA>
                ))}
              </AccountSettingDivs>
              <ServiceDivs>
                <GreyFont>내 정보관리</GreyFont>
                <FindListA to="/">
                  <FindListFontDivTwo>컬리퍼플박스</FindListFontDivTwo>
                </FindListA>
              </ServiceDivs>
            </OtherListDiv>
          </InfoListDivs>
        </InfoListDiv>
        <SellListDiv>
          <SellListTitleDiv>
            <SellListDivs>
              <SellListTitleFont>내 판매 상품</SellListTitleFont>
              <SellListTitleSpan>
                현재 내 판매 상품들 전체가 보여집니다.
              </SellListTitleSpan>
            </SellListDivs>
          </SellListTitleDiv>

          <SellListCount>
            전체
            <SellListStrong>{FindListContentData.length}</SellListStrong>개
          </SellListCount>

          <SellListContentDiv>
              {FindListContentData.map((item) => (
                <SellListContentDiv key={item.id}>
                <SellListContentDivTwo key={item.id} >
                  <SellListContentA to="/">
                    <SellListContentSpan>
                      <img
                        src={item.src}
                        alt="img"
                        width="90px"
                        height="117px"
                      />
                    </SellListContentSpan>
                  </SellListContentA>
                  <SellListContents>
                    <SellListContentsDiv>
                      <div>
                        <SellListTitle>{item.title}</SellListTitle>
                      </div>
                      <div>
                        <SellListSpan>{item.price}</SellListSpan>원
                      </div>
                    </SellListContentsDiv>
                    <SellListButtonDiv>
                      <SellListButton>삭제</SellListButton>
                      <SellListButton>수정</SellListButton>
                    </SellListButtonDiv>
                  </SellListContents>
                </SellListContentDivTwo>
                </SellListContentDiv>
              ))}
          </SellListContentDiv>
        </SellListDiv>
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
  margin: 0px 0px 0px;
  padding: 26px 20px 0px;
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
  a {
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
  &::after {
    content: "";
    position: absolute;
    height: 10px;
    top: 4.5px;
    left: 55px;
    border-right: 2px solid rgb(233, 233, 233);
  }
`;

const CurlyPTwo = styled.p`
  position: relative;
  padding-right: 8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
`;

const CurlyBannerA = styled(Link)`
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
  color: black;
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

const OtherListDiv = styled.div`
  width: 375px;
  height: 681.2px;
  box-sizing: border-box;
  padding: 0px 25px;
`;

const PointDiv = styled.div`
  display: flex;
  margin-top: 12px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 8px;
`;

const PointButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  min-height: 92px;
  padding: 22px 12px 22px 20px;
  &::after {
    content: "";
    position: absolute;
    height: 40px;
    top: 25px;
    left: 160px;
    border-right: 1px solid rgb(222, 222, 222); /* border-right 속성 값이 정의되어야 함 */
  }
`;

const PointButtonTwo = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  min-height: 92px;
  padding: 22px 12px 22px 20px;
`;

const PointDivOne = styled.div`
  position: relative;
  min-width: 50%;
`;

const PointDivTwo = styled.div`
  position: relative;
  min-width: 50%;
`;

const Point = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(102, 102, 102);
`;

const Cashdiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.4px;
`;
const CashStrong = styled.div`
  padding-right: 2px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.8px;
`;

const GiftCardButton = styled.button`
  display: flex;
  gap: 2px;
  position: absolute;
  top: 14px;
  right: 12px;
  height: 26px;
  padding: 0px 10px;
  border-radius: 13px;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: -0.2px;
  background-color: rgb(242, 242, 242);
`;

const MenuDivs = styled.div`
  width: 375px;
  height: 294px;
  box-sizing: border-box;
  padding: 0px 25px 0px 25px;
`;

const ShoppingListDivs = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 16px;
  border-top: 1px solid rgb(238, 238, 238);
`;

const BenefitDivs = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 16px;
  border-top: 1px solid rgb(238, 238, 238);
`;

const AccountSettingDivs = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 16px;
  border-top: 1px solid rgb(238, 238, 238);
`;

const GreyFont = styled.div`
  width: 100%;
  padding: 12px 0px 6px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(181, 181, 181);
`;

const FindListsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

const FindListA = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  min-width: 100%;
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
  height: 54px;
  padding: 16px 0px;
  font-size: 14px;
  gap: 6px;
  color: black;
`;

const FindListFontDiv = styled.div`
  font-weight: 400;
  line-height: 18px;
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const FindListFontDivTwo = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 16px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const ServiceDivs = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 16px;
  border-top: 1px solid rgb(238, 238, 238);
`;

const BannerDiv = styled.div`
  width: 375px;
  height: 73px;
  box-sizing: border-box;
  padding: 15px 25px 20px;
`;

const BannerA = styled(Link)`
  display: block;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 53px;
  object-fit: cover;
  border-radius: 4px;
`;

const SellListDiv = styled.div`
  width: 650px;
  height: 100%;
`;

const SellListTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
  padding: 25px 0px 20px;
  border-bottom: 2px solid rgb(51, 51, 51);
`;

const SellListDivs = styled.div`
  display: flex;
  align-items: flex-end;
`;
const SellListTitleFont = styled.h2`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
`;
const SellListTitleSpan = styled.span`
  padding-left: 8px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: rgb(153, 153, 153);
`;

const SellListCount = styled.div`
  color: rgb(51, 51, 51);
  padding: 8px 0px 6px;
  margin-left: 20px;
  margin-top: 10px;
`;
const SellListStrong = styled.strong`
  font-weight: 700;
`;

const SellListContentDiv = styled.div`
  width: auto;
  height: 137px;
  max-width: 610px;
  max-height: 137px;

  position: relative;
  margin: 0px 0px 0px 20px;
`;
const SellListContentDivTwo = styled.div`
  height: 137px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 10px 0px;
`;

const SellListContentA = styled(Link)`
  display: block;
  position: relative;
  margin-right: 16px;
  width: 90px;
  height: 117px;
  background-color: rgb(245, 245, 245);
`;

const SellListContentSpan = styled.span`
  position: absolute;
  width: 90px;
  height: 117px;
`;

const SellListContents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 90px);
  padding-left: 16px;
  flex-grow: 1;
`;
const SellListContentsDiv = styled.div`
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 30px;
`;
const SellListTitle = styled.a`
  font-weight: 700;
`;

const SellListSpan = styled.span`
  color: rgb(51, 51, 51);
  font-weight: bold;
  margin-top: 10px;
`;
const SellListButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;
const SellListButton = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid black;
  border-radius: 4px;
`;

const BottomDivs = styled.div`
  width: 100%;
  height: 534px;
  border-top: 1px solid gray;
`;
