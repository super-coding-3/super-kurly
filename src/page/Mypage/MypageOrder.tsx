import { useState } from "react";
import styled from "styled-components";

const MypageOrderContainer = styled.div`
  width: 650px;
  height: 850px;
  background-color: white;
`;

const Header = styled.div`
  width: 610px;
  height: 75px;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  padding: 25px 0px 20px;
  border-bottom: 1.6px solid #333333;

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-right: 8px;
  }
  span {
    font-size: 13px;
    color: #999999;
  }
`;

const ButtonWrapper = styled.div`
  width: 650px;
  height: 80px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTab = styled.button<{ isActive: boolean }>`
  width: 148px;
  height: 40px;
  font-size: 14px;
  margin: 0px 6px 0px 0px;
  padding: 11px 12px 10px;
  border: ${(props) =>
    props.isActive ? "1px solid #fb7c51" : "1px solid #cccccc"};
  border-radius: 3px;
`;

const Body = styled.div`
  width: 650px;
  height: 700px;
`;

const MypageOrder = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <MypageOrderContainer>
      <Header>
        <h2>주문 내역</h2>
        <span>최대 지난 3년간의 주문내역까지 확인할 수 있어요</span>
      </Header>
      <ButtonWrapper>
        <ButtonTab
          isActive={activeTabIndex === 0}
          onClick={() => handleButtonClick(0)}
        >
          3개월
        </ButtonTab>
        <ButtonTab
          isActive={activeTabIndex === 1}
          onClick={() => handleButtonClick(1)}
        >
          6개월
        </ButtonTab>
        <ButtonTab
          isActive={activeTabIndex === 2}
          onClick={() => handleButtonClick(2)}
        >
          1년
        </ButtonTab>
        <ButtonTab
          isActive={activeTabIndex === 3}
          onClick={() => handleButtonClick(3)}
        >
          3년
        </ButtonTab>
      </ButtonWrapper>
      <Body></Body>
    </MypageOrderContainer>
  );
};

export default MypageOrder;
