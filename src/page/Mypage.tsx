import styled from "styled-components";
import MypageInfo from "../components/mypage/MypageInfo";
import MypageFrequentMenu from "../components/mypage/MypageFrequentMenu";

const MypageContainer = styled.div`
  width: 100vw;
  height: 1446px;
  background-color: #f7f7f7;
`;

const SideMenuContainer = styled.div`
  width: 375px;
  margin: auto;
`;

const OrderHistoryContainer = styled.div`
  width: 610px;
`;

const Mypage = () => {
  return (
    <MypageContainer>
      <SideMenuContainer>
        <MypageInfo />
        <MypageFrequentMenu />
      </SideMenuContainer>
      <OrderHistoryContainer></OrderHistoryContainer>
    </MypageContainer>
  );
};

export default Mypage;
