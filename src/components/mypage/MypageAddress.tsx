import { useEffect, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import styled from "styled-components";
import { MAIN_COLOR } from "../../constans/color";
import CustomCheckbox from "./CustomCheckbox";

const MypageAddressContainer = styled.div`
  width: 650px;
  min-height: 213px;
  background-color: white;
`;

const Header = styled.div`
  width: 610px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  padding: 25px 0px 20px;
  border-bottom: 1.6px solid #333333;
  font-weight: 500;

  div {
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-right: 8px;
  }
  span {
    font-size: 13px;
    color: #999999;
  }
  button {
    border: none;
    font-size: 16px;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
`;

const AddressWrapper = styled.div`
  width: 610px;
  height: 138px;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddressDetailWrapper = styled.div`
  width: 526px;
  height: 97px;
`;

const Address = styled.p`
  width: 526px;
  height: 18.4px;
  color: #333333;
  margin-bottom: 5px;
  font-size: 16px;
`;

const ExpressDelivery = styled.p`
  height: 20px;
  font-size: 14px;
  color: ${MAIN_COLOR};
`;

const CheckboxWrapper = styled.div`
  width: 30x;
  height: 30px;
  margin-right: 10px;
`;

const DefaultAddress = styled.div`
  width: 74.5px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  font-size: 12px;
  margin: 0px 0px 10px;
  padding: 4px 8px;
  background-color: #f7f7f7;
  border-radius: 11px;
  font-weight: 600;
`;

const NameAndPhoneWrapper = styled.div`
  display: flex;
  height: 16px;
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
`;

const Name = styled.div`
  padding-right: 10px;
  border-right: 1px solid #cccccc;
`;

const Phone = styled.div`
  padding-left: 10px;
`;

const MypageAddress = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [isBoxChecked, setIsBoxChecked] = useState<boolean>(true);
  const [isAddressSelected, setIsAddressSelected] = useState<boolean>(false);
  const [addressList, setAddressList] = useState<string[]>([]);
  const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState<number>(-1);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleCheckbox = (index: number) => {
    setSelectedAddressIndex(index);
    const newList = [...addressList];
    const selectedAddress = newList.splice(index, 1)[0];
    newList.unshift(selectedAddress);
    setAddressList(newList);
  };

  const handleClickOutside = (event: any) => {
    if (event.target === event.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  const handleComplete = (data: any) => {
    const fullAddress = data.address;
    setAddress(fullAddress);
    setIsPopupOpen(false);
    setIsAddressSelected(true);
    setAddressList([fullAddress, ...addressList]);
    setSelectedAddressIndex(0);
  };

  useEffect(() => {
    if (addressList.length > 0) {
      setSelectedAddressIndex(0);
    }
  }, [addressList]);

  return (
    <MypageAddressContainer>
      <Header>
        <div>
          <h2>배송지 관리</h2>
          <span>배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.</span>
        </div>
        <button onClick={handleOpenPopup}>+ 새 배송지 추가</button>
        {isPopupOpen && (
          <ModalWrapper onClick={handleClickOutside}>
            <ModalContent>
              <DaumPostcodeEmbed onComplete={handleComplete} />
            </ModalContent>
          </ModalWrapper>
        )}
      </Header>
      {isAddressSelected &&
        addressList.map((address, index) => (
          <AddressWrapper key={index}>
            <CheckboxWrapper>
              <CustomCheckbox
                isChecked={selectedAddressIndex === index}
                onChange={() => handleCheckbox(index)}
              />
            </CheckboxWrapper>
            <AddressDetailWrapper>
              {index === 0 && <DefaultAddress>기본 배송지</DefaultAddress>}
              <Address>{address}</Address>
              <NameAndPhoneWrapper>
                <Name>홍길동</Name>
                <Phone>010-0101-0101</Phone>
              </NameAndPhoneWrapper>
              <ExpressDelivery>샛별배송</ExpressDelivery>
            </AddressDetailWrapper>
          </AddressWrapper>
        ))}
    </MypageAddressContainer>
  );
};

export default MypageAddress;
