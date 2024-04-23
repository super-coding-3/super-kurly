import styled from "styled-components";
import MainMenu from "../components/main/MainMenu";

const MainContainer = styled.div`
  width: 100vw;
  margin: auto;
`;

const Slide = styled.div``;

const PopularItems = styled.div``;

const TodaySpecial = styled.div``;

const Main = () => {
  return (
    <MainContainer>
      <MainMenu />
      <Slide></Slide>
      <PopularItems></PopularItems>
      <TodaySpecial></TodaySpecial>
    </MainContainer>
  );
};

export default Main;
