import { useEffect, useState } from "react";
import styled from "styled-components";

const MainBannerContainer = styled.div`
  width: 1050px;
  height: 140px;
  margin: 50px auto;
`;

const image = [
  "/img/main/kurly-banner1.jpg",
  "/img/main/kurly-banner2.jpg",
  "/img/main/kurly-banner3.jpg",
];

const MainBanner = () => {
  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * image.length);
    setBannerImage(image[randomIndex]);
  }, []);

  return (
    <MainBannerContainer>
      <img src={bannerImage} alt="Banner" />
    </MainBannerContainer>
  );
};

export default MainBanner;
