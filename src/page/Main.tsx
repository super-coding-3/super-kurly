import styled from "styled-components";
import MainMenu from "../components/main/MainMenu";
import MainSlide from "../components/main/MainSlide";
import MainPopularItems from "../components/main/MainPopularItems";
import MainBanner from "../components/main/MainBanner";
import MainDailyDeals from "../components/main/MainDailyDeals";

const MainContainer = styled.div`
  width: 100vw;
  margin: auto;
`;

const Main = () => {
  return (
    <MainContainer>
      <MainMenu />
      <MainSlide />
      <MainPopularItems />
      <MainBanner />
      <MainDailyDeals />
    </MainContainer>
  );
};

export default Main;
