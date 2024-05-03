import styled from "styled-components";
import { IoMdPaper } from "react-icons/io";
import { RiCoupon3Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import ProductSellList from "../ProductsSellList/ProductSellList";

interface MypageFrequentMenuProps {
  onSelectMenu: (menu: string) => void;
}

const FrequentMenuContainer = styled.div`
  width: 375px;
`;

const FrequentMenuWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 294px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
`;

const MenuHeading = styled.h4`
  width: 325px;
  height: 38px;
  font-size: 12px;
  color: #b5b5b5;
  padding: 12px 0px 6px;
`;

const FrequentMenuOptions = styled.div`
  width: 325px;
  height: 54px;
  font-size: 16px;
  padding: 16px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CustomIoMdPaper = styled(IoMdPaper)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

const CustomRiCoupon3Line = styled(RiCoupon3Line)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

const CustomGoHeart = styled(GoHeart)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

const CustomLiaShoppingBagSolid = styled(LiaShoppingBagSolid)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

const MenuOptions = styled.div`
  width: 325px;
  height: 46px;
  padding: 12px 0px;
  font-size: 16px;
`;
const BannerWrppaer = styled.div`
  width: 375px;
  height: 73px;
  background-color: white;
  padding: 0px 25px 20px;

  img {
    width: 325px;
  }
`;

const OtherMenuWrapper = styled.div`
  width: 100%;
  height: 318px;
  background-color: white;
  padding: 0px 25px;
  cursor: pointer;
`;

const ManageInfoWrapper = styled.div`
  width: 325px;
  height: 205px;
  padding: 12px 0px 16px;
`;
const ServiceGuideWrapper = styled.div`
  width: 325px;
  height: 113px;
  padding: 12px 0px 16px;
`;

const MypageFrequentMenu: React.FC<MypageFrequentMenuProps> = ({
  onSelectMenu,
}) => {
  const navigate = useNavigate();

  const OrderHistoryHandler = () => {
    onSelectMenu("order");
  };

  const CouponHandler = () => {
    onSelectMenu("coupon");
  };

  const AddressHandler = () => {
    onSelectMenu("address");
  };

  const ProductSellHandler = () => {
    navigate("/ProductSellList");
  };

  return (
    <FrequentMenuContainer>
      <FrequentMenuWrapper>
        <MenuHeading>자주찾는 메뉴</MenuHeading>
        <FrequentMenuOptions onClick={OrderHistoryHandler}>
          <CustomIoMdPaper />
          주문 내역
        </FrequentMenuOptions>
        <FrequentMenuOptions onClick={CouponHandler}>
          <CustomRiCoupon3Line />
          쿠폰
        </FrequentMenuOptions>
        <FrequentMenuOptions onClick={ProductSellHandler}>
          <CustomGoHeart />내 판매 상품
        </FrequentMenuOptions>
        <FrequentMenuOptions onClick={ProductSellHandler}>
          <CustomLiaShoppingBagSolid />
          판매 상품 등록
        </FrequentMenuOptions>
      </FrequentMenuWrapper>
      <BannerWrppaer>
        <img src="/img/mypage/kurly-mypage-banner.jpg" alt="mypage-banner" />
      </BannerWrppaer>
      <OtherMenuWrapper>
        <ManageInfoWrapper>
          <MenuHeading>내 정보관리</MenuHeading>
          <MenuOptions onClick={AddressHandler}>배송지 관리</MenuOptions>
          <MenuOptions>나의 컬리스타일</MenuOptions>
          <MenuOptions>개인정보 수정</MenuOptions>
        </ManageInfoWrapper>
        <ServiceGuideWrapper>
          <MenuHeading>서비스 안내</MenuHeading>
          <MenuOptions>컬리퍼플박스</MenuOptions>
        </ServiceGuideWrapper>
      </OtherMenuWrapper>
    </FrequentMenuContainer>
  );
};

export default MypageFrequentMenu;
