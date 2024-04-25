import { useState } from "react";
import styled from "styled-components";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const images = [
  "/img/main/kurly-image1.jpg",
  "/img/main/kurly-image2.png",
  "/img/main/kurly-image3.png",
  "/img/main/kurly-image4.jpg",
  "/img/main/kurly-image5.jpg",
];

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  opacity: 0;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  opacity: 0;
`;

const MainCarouselContainer = styled.div`
  width: 100vw;
  height: 370px;
  position: relative;
  overflow: hidden;

  &:hover ${NextButton}, &:hover ${PrevButton} {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

const MainCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonBackground = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
`;

const CustomGrNext = styled(GrNext)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
`;

const CustomGrPrevious = styled(GrPrevious)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
`;

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <MainCarouselContainer>
      <MainCarouselImage
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
      />
      <NextButton onClick={goToNextSlide}>
        <ButtonBackground>
          <CustomGrNext />
        </ButtonBackground>
      </NextButton>
      <PrevButton onClick={goToPrevSlide}>
        <ButtonBackground>
          <CustomGrPrevious />
        </ButtonBackground>
      </PrevButton>
    </MainCarouselContainer>
  );
};

export default MainCarousel;
