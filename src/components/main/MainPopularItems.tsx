import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BsChatSquareText } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const mockData = [
  {
    id: 1,
    image: "/img/main/kurly-items1.jpg",
    name: "상품 1",
    originalPrice: "11500원",
    discount: "15%",
    price: "10,000원",
    reviewCount: "9999+",
  },
  {
    id: 2,
    image: "/img/main/kurly-items2.jpg",
    name: "상품 2",
    originalPrice: "20000원",
    discount: "30%",
    price: "15,000원",
    reviewCount: "999+",
  },
  {
    id: 3,
    image: "/img/main/kurly-items3.jpg",
    name: "상품 3",
    originalPrice: "20000원",
    discount: "15%",
    price: "20,000원",
    reviewCount: "9999+",
  },
  {
    id: 4,
    image: "/img/main/kurly-items4.jpg",
    name: "상품 4",
    originalPrice: "30000원",
    discount: "20%",
    price: "25,000원",
    reviewCount: "99+",
  },
  {
    id: 5,
    image: "/img/main/kurly-items5.jpg",
    name: "상품 5",
    originalPrice: "35000원",
    discount: "15%",
    price: "30,000원",
    reviewCount: "9999+",
  },
  {
    id: 6,
    image: "/img/main/kurly-items6.jpg",
    name: "상품 6",
    originalPrice: "40000원",
    discount: "25%",
    price: "35,000원",
    reviewCount: "999+",
  },
  {
    id: 7,
    image: "/img/main/kurly-items7.jpg",
    name: "상품 7",
    originalPrice: "48000원",
    discount: "15%",
    price: "40,000원",
    reviewCount: "9999+",
  },
  {
    id: 8,
    image: "/img/main/kurly-items8.jpg",
    name: "상품 8",
    originalPrice: "50000원",
    discount: "15%",
    price: "45,000원",
    reviewCount: "9999+",
  },
];

const PopularItemsContainer = styled.div`
  width: 1050px;
  height: 596px;
  margin: 100px auto;
  font-weight: 500;
`;

const PopularItemsHeaderWrapper = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #c4c4c4;
  }

  button {
    font-size: 24px;
    font-weight: 900;
  }
`;

const PopularItemsContentContainer = styled.div`
  width: 100%;
  display: flex;
`;

const PopularItemsGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  overflow: hidden;
`;

const PopularItemsContentWrapper = styled.div`
  width: 249px;
`;

const PopularItemsImgWrapper = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

const CustomIoCartOutline = styled(IoCartOutline)`
  font-size: 18px;
  margin-right: 5px;
`;

const AddItemsBtn = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid #c4c4c4;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const ItemNameWrapper = styled.div`
  width: 100%;
  height: 23px;
  color: #333333;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
`;

const ItemPriceWrapper = styled.div`
  width: 100%;
  height: 44px;

  p {
    color: #c4c4c4;
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: line-through;
    margin-bottom: 5px;
  }
  span {
    font-weight: 700;
  }
  span:nth-child(2) {
    color: #fb7c51;
    margin-right: 7px;
  }
`;

const ItemReviewWrapper = styled.div`
  width: 100%;
  height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  display: flex;
  align-items: center;
  span {
    margin-left: 3px;
  }
`;

const PrevNextButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ButtonBackground = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -3%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;

  :hover {
    color: #fb7c51;
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;

  :hover {
    color: #fb7c51;
  }
`;

const CustomGrPrevious = styled(GrPrevious)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

const CustomGrNext = styled(GrNext)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

const MainPopularItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [itemsData, setItemsData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("api_endpoint");
  //         setItemsData(response.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const handleNextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const currentItems = mockData.slice(currentIndex * 4, (currentIndex + 1) * 4);

  return (
    <PopularItemsContainer>
      <PopularItemsHeaderWrapper>
        <h2>
          지금 가장 많이 담는 특가🧐
          <button>
            <GrNext />
          </button>
        </h2>
        <p>컬리 추천 특가템 최대 30%</p>
      </PopularItemsHeaderWrapper>

      <PrevNextButtonContainer>
        {currentIndex > 0 && (
          <PrevButton onClick={handlePrevSlide}>
            <ButtonBackground>
              <CustomGrPrevious />
            </ButtonBackground>
          </PrevButton>
        )}
        <PopularItemsContentContainer>
          {currentItems.map((item) => (
            <PopularItemsGridContainer>
              <PopularItemsContentWrapper key={item.id}>
                <PopularItemsImgWrapper>
                  <img src={item.image} alt={item.name} />
                </PopularItemsImgWrapper>
                <AddItemsBtn>
                  <CustomIoCartOutline />
                  담기
                </AddItemsBtn>
                <ItemNameWrapper>{item.name}</ItemNameWrapper>
                <ItemPriceWrapper>
                  <p>{item.originalPrice}</p>
                  <span>{item.discount}</span>
                  <span>{item.price}</span>
                </ItemPriceWrapper>
                <ItemReviewWrapper>
                  <BsChatSquareText />
                  <span>{item.reviewCount}</span>
                </ItemReviewWrapper>
              </PopularItemsContentWrapper>
            </PopularItemsGridContainer>
          ))}
        </PopularItemsContentContainer>
        {mockData.length > (currentIndex + 1) * 4 && (
          <NextButton onClick={handleNextSlide}>
            <ButtonBackground>
              <CustomGrNext />
            </ButtonBackground>
          </NextButton>
        )}
      </PrevNextButtonContainer>
    </PopularItemsContainer>
  );
};

export default MainPopularItems;
