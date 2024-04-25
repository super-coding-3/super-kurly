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
                <CurlyPTwo>최초 1회 무료배송</CurlyPTwo>
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
                <FindListA>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="28px"
                    height="28px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                  <FindListFontDiv>주문 내역</FindListFontDiv>
                </FindListA>
                <FindListA>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="28px"
                    height="28px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                    />
                  </svg>

                  <FindListFontDiv>쿠폰</FindListFontDiv>
                </FindListA>
                <FindListA>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="28px"
                    height="28px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>

                  <FindListFontDiv>찜한 상품</FindListFontDiv>
                </FindListA>
                <FindListA href="/productSellList">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="28px"
                    height="28px"
                    textDecoration="none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                  <FindListFontDiv>내 판매 상품</FindListFontDiv>
                </FindListA>
                <FindListA>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="28px"
                    height="28px"
                    color="black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      color="black"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                  <FindListFontDiv>판매 상품 등록</FindListFontDiv>
                </FindListA>
              </FindListsDiv>
            </MenuDivs>
            <BannerDiv>
              <BannerA href="https://www.kurly.com/shop/event/kurlyEventV2.php?lego=event/2023/0911/join/coupon">
                <BannerImg src="https://product-image.kurly.com/cdn-cgi/image/width=1150,quality=85,format=auto/banner/da-banner/4962e7bf-b76f-467d-aed1-8ef0764048e8.png"></BannerImg>
              </BannerA>
            </BannerDiv>
            <OtherListDiv>
              <ShoppingListDivs>
                <GreyFont>쇼핑</GreyFont>
                <FindListA>
                  <FindListFontDivTwo>결제수단 · 컬리페이</FindListFontDivTwo>
                </FindListA>
                <FindListA>
                  <FindListFontDivTwo>상품 후기</FindListFontDivTwo>
                </FindListA>
                <FindListA>
                  <FindListFontDivTwo>선물 내역</FindListFontDivTwo>
                </FindListA>
                <FindListA>
                  <FindListFontDivTwo>상품 문의</FindListFontDivTwo>
                </FindListA>
              </ShoppingListDivs>
              <BenefitDivs>
                <GreyFont>혜택</GreyFont>
                <FindListA>
                  <FindListFontDivTwo>컬리멤버스</FindListFontDivTwo>
                </FindListA>
              </BenefitDivs>
              <AccountSettingDivs>
                <GreyFont>내 정보관리</GreyFont>
                <FindListA>
                  <FindListFontDivTwo>배송지 관리</FindListFontDivTwo>
                </FindListA>
                <FindListA>
                  <FindListFontDivTwo>나의 컬리스타일</FindListFontDivTwo>
                </FindListA>
                <FindListA>
                  <FindListFontDivTwo>개인정보 수정</FindListFontDivTwo>
                </FindListA>
              </AccountSettingDivs>
              <ServiceDivs>
                <GreyFont>내 정보관리</GreyFont>
                <FindListA>
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
            <SellListStrong>1</SellListStrong>개
          </SellListCount>
          <SellListContentDiv>
            <SellListContentDivTwo>
              <SellListContentA href="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg">
                <SellListContentSpan>
                    <img src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg" alt="img" width="90px" height="117px"/>
                </SellListContentSpan>
              </SellListContentA>
              <SellListContents>
                    <SellListContentsDiv>
                        <div>
                            <SellListTitle>사미헌 갈비탕</SellListTitle>
                        </div>
                        <div>
                            <SellListSpan>10000원</SellListSpan>
                        </div>
                    </SellListContentsDiv>
                    <SellListButtonDiv>
                        <SellListButton>삭제</SellListButton>
                        <SellListButton>수정</SellListButton>
                    </SellListButtonDiv>
                </SellListContents>
            </SellListContentDivTwo>
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

const FindListA = styled.a`
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
  svg {
    color: black;
  }
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

const BannerA = styled.a`
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
  overflow: hidden;
  position: relative;
  margin: 0px 0px 0px 20px;
`;
const SellListContentDivTwo = styled.div`
  height: 137px;
  display: flex;
  flex-direction: row;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 10px 0px;
`;

const SellListContentA = styled.a`
  display: block;
  position: relative;
  width: 90px;
  height: 117px;
  background-color: rgb(245, 245, 245);
`;

const SellListContentSpan = styled.span`
    position: absolute;
    width: 90px;
    height: 117px;
`

const SellListContents = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: calc(100% - 90px);
    padding-left: 16px;
`
const SellListContentsDiv = styled.div`
    font-size: 14px;
    line-height: 23px;
    
`
const SellListTitle = styled.a`
    font-weight: 700;
`

const SellListSpan = styled.span`
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-top: 10px;
`
const SellListButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 6px;

`
const SellListButton= styled.button`
    width: 100%;
    height: 36px;
    border: 1px solid black;
    border-radius: 4px;
`

const BottomDivs = styled.div`
  width: 100%;
  height: 534px;
  border-top: 1px solid gray;
`;
