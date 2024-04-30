import styled from "styled-components";
import MainMenu from "../main/MainMenu";



const SellerOrder = () => {
  return (
    <>
      <MainMenu />
      <div>
        <SellerOrderALL></SellerOrderALL>
      </div>
    </>
  );
};

export default SellerOrder;

const SellerOrderALL = styled.div`
    width: 100%;
    padding: 50px 60px 80px;
    height: 100%;
    height: 1475.8px;
    box-sizing: border-box;
`