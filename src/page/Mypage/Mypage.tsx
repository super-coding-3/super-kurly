import styled from "styled-components";
import MypageInfo from "../../components/mypage/MypageInfo";
import MypageFrequentMenu from "../../components/mypage/MypageFrequentMenu";
import MypageOrder from "./MypageOrder";
import MypageCoupon from "./MypageCoupon";
import { useState } from "react";

const MypageContainer = styled.div`
  width: 100vw;
  height: 1446px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`;

const SideMenuContainer = styled.div`
  width: 375px;
  margin-right: 20px;
`;

const SelectedMenuContainer = styled.div`
  width: 650px;
`;

const menuComponents: Record<string, JSX.Element> = {
  order: <MypageOrder />,
  coupon: <MypageCoupon />,
};

const Mypage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("order");

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
