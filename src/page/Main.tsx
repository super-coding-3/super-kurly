import styled from "styled-components";
import MainMenu from "../components/main/MainMenu";
import MainSlide from "../components/main/MainSlide";

const MainContainer = styled.div`
  width: 100vw;
  margin: auto;
`;

const Main = () => {
  return (
    <MainContainer>
      <MainMenu />
      <MainSlide />
    </MainContainer>
  );
};

export default Main;
