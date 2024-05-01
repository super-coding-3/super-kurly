import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MAIN_COLOR, MAIN_LIGHT_COLOR } from "../../constans/color";

const mockData = [
  {
    id: 1,
    image: "/img/main/kurly-daily1.jpg",
    name: "상품 1",
    originalPrice: "11500원",
    discount: "15%",
    price: "10,000원",
    reviewCount: "9999+",
  },
  {
    id: 2,
    image: "/img/main/kurly-daily2.jpg",
    name: "상품 2",
    originalPrice: "20000원",
    discount: "30%",
    price: "15,000원",
    reviewCount: "999+",
  },
];

const DailyDealsContainer = styled.div`
  width: 1050px;
  height: 782px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
`;

const SideHeader = styled.div`
  width: 249px;

  h2 {
    font-size: 28px;
    font-weight: 500;
    color: #33333;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #999999;
    padding-top: 11px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #cccccc;
    padding-top: 26px;
  }
`;

const Timer = styled.div`
  width: 100%;
  height: 77px;
  font-size: 32px;
  font-weight: 700;
  color: #333333;
  padding-top: 24px;
  display: flex;
  align-items: center;

  img {
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
`;

const ItemContainer = styled.div`
  width: 694px;
  height: 621px;
  padding: 0px 5px;
  display: flex;
`;

const ItemGridWrapper = styled.div`
  width: 338px;
  display: grid;
  margin-right: 10px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ItemContentsWrapper = styled.div`
  position: relative;
  width: 338px;
`;

const ItemImageWrapper = styled.div`
  position: relative;
  width: 338px;
  height: 434px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 5px;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  div {
    position: absolute;
    top: 2%;
    left: 3%;
    width: 68px;
    height: 31px;
    background-color: ${MAIN_LIGHT_COLOR};
    color: white;
    font-size: 14px;
    z-index: 1;
    padding: 7px 8px;
    border-radius: 4px;
  }
`;

const CustomIoCartOutline = styled(IoCartOutline)`
  font-size: 18px;
  margin-right: 5px;
`;

const AddItemBtn = styled.button`
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
    color: ${MAIN_COLOR};
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

const MainDailyDeals = () => {
  const items = mockData;
  const [timer, setTimer] = useState(24 * 60 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = String(Math.floor(timer / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <DailyDealsContainer>
      <SideHeader>
        <h2>일일특가</h2>
        <h3>24시간 한정 특가 찬스!</h3>
        <Timer>
          <img src="/img/main/Timer.svg" />
          <span>{`${hours}: ${minutes}: ${seconds}`}</span>
        </Timer>
        <p>망설이면 늦어요!</p>
      </SideHeader>
      <ItemContainer>
        {items.map((item) => (
          <ItemGridWrapper>
            <ItemContentsWrapper key={item.id}>
              <ItemImageWrapper>
                <img src={item.image} alt="daily-deals-img" />
                <div>일일특가</div>
              </ItemImageWrapper>
              <AddItemBtn>
                <CustomIoCartOutline />
                {/* 장바구니 추가 기능 구현 필요 */}
                <span>담기</span>
              </AddItemBtn>
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
            </ItemContentsWrapper>
          </ItemGridWrapper>
        ))}
      </ItemContainer>
    </DailyDealsContainer>
  );
};

export default MainDailyDeals;
