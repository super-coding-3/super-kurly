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

const MainCarouselContainer = styled.div`
  width: 100vw;
  height: 370px;
  position: relative;
  overflow: hidden;
`;

const MainCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  font-size: 30px;
  color: white;
  cursor: pointer;
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
        <GrNext />
      </NextButton>
      <PrevButton onClick={goToPrevSlide}>
        <GrPrevious />
      </PrevButton>
    </MainCarouselContainer>
  );
};

export default MainCarousel;
