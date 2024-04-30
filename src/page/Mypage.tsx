import styled from "styled-components";
import MypageInfo from "../components/mypage/MypageInfo";
import MypageFrequentMenu from "../components/mypage/MypageFrequentMenu";
import MypageOrder from "../components/mypage/MypageOrder";
import MypageCoupon from "../components/mypage/MypageCoupon";
import { useState } from "react";
import MypageAddress from "../components/mypage/MypageAddress";

const MypageContainer = styled.div`
  width: 100vw;
  height: 1446px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const SideMenuContainer = styled.div`
  width: 375px;
  margin-right: 20px;
`;

const SelectedMenuContainer = styled.div`
  width: 650px;
`;

const Mypage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("order");

  const menuComponents: Record<string, JSX.Element> = {
    order: <MypageOrder />,
    coupon: <MypageCoupon />,
    address: <MypageAddress />,
  };

  const handleMenuChange = (menu: string) => {
    setSelectedMenu(menu);
  };
  return (
    <MypageContainer>
      <SideMenuContainer>
        <MypageInfo />
        <MypageFrequentMenu onSelectMenu={handleMenuChange} />
      </SideMenuContainer>
      <SelectedMenuContainer>
        {menuComponents[selectedMenu]}
      </SelectedMenuContainer>
    </MypageContainer>
  );
};

export default Mypage;
