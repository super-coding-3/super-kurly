import React, { useState } from "react";
import styled from "styled-components";
import CartSelect from "./CartSelect";
import OrderedProductTitle from "../common/OrderedProductTitle";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoMdClose,
} from "react-icons/io";
import OrderedProductAmount from "../common/OrderedProductAmount";
import { MAIN_COLOR } from "../../constans/color";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

interface CartDataProps {
  cartData: Array<object>;
  productSelectHandler: Function;
  productDeleteHandler: Function;
  allCheckBtnHandler: Function;
  amountMinusHandler: Function;
  amountPlusHandler: Function;
}

const CartList: React.FC<CartDataProps> = (props) => {
  const [productDropBar, setproductDropBar] = useState(false);
  const [productAmount, setproductAmount] = useState(1);

  const productSelectHandler = (index: number) => {
    props.productSelectHandler(index);
  };

  const productDeleteHandler = (id: string) => {
    props.productDeleteHandler(id);
  };

  const amountMinusHandler = (index: number, amount: number) => {
    props.productDeleteHandler(index, amount);
  };

  const amountPlusHandler = (index: number, amount: number, stock: number) => {
    props.productDeleteHandler(index, amount, stock);
  };

  return (
    <CartListWrap>
      <CartSelect
        cartData={props.cartData}
        allCheckBtnHandler={props.allCheckBtnHandler}
      />
      <CartProduct>
        <OrderedProductTitle
          productDropBar={productDropBar}
          setproductDropBar={setproductDropBar}
        />
        {productDropBar &&
          props.cartData.map((data: any, index: number) => {
            return (
              <CartProductList>
                <CartListFirst>
                  <CartListCheckBtn
                    onClick={() => {
                      productSelectHandler(index);
                    }}
                  >
                    {data.select === false ? (
                      <IoIosCheckmarkCircleOutline
                        color="rgb(221, 221, 221)"
                        size="2em"
                      />
                    ) : (
                      <IoIosCheckmarkCircle color={MAIN_COLOR} size="2em" />
                    )}
                  </CartListCheckBtn>
                  <CartListImg src={data.img} />
                  <CartProductDiv>
                    <div id="productName">{data.option}</div>
                    <div id="productTitle">{data.title}</div>
                  </CartProductDiv>
                </CartListFirst>
                <CartListSecond>
                  <CartListAmount>
                    <CartListAmountMinus
                      onClick={() => {
                        amountMinusHandler(index, data.amount);
                      }}
                    >
                      {data.amount === 1 ? (
                        <FaMinus color="#dddddd" />
                      ) : (
                        <FaMinus />
                      )}
                    </CartListAmountMinus>
                    <div>{data.amount}</div>
                    <CartListAmountPlus
                      onClick={() => {
                        amountPlusHandler(index, data.amount, data.stock);
                      }}
                    >
                      {data.amount === data.stock ? (
                        <FaPlus color="#dddddd" />
                      ) : (
                        <FaPlus />
                      )}
                    </CartListAmountPlus>
                  </CartListAmount>
                  <div id="price">
                    {data.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </div>
                  <CartListDelBtn
                    onClick={() => {
                      productDeleteHandler(data.id);
                    }}
                  >
                    <IoMdClose color="rgb(221, 221, 221)" size="2em" />
                  </CartListDelBtn>
                </CartListSecond>
              </CartProductList>
            );
          })}
      </CartProduct>
      <CartSelect
        cartData={props.cartData}
        allCheckBtnHandler={props.allCheckBtnHandler}
      />
    </CartListWrap>
  );
};

export default CartList;

const CartListWrap = styled.div`
  width: 742px;
  @media screen and (max-width: 1050px) {
    max-width: 560px;
  }
  @media screen and (max-width: 540px) {
    max-width: 340px;
  }
`;

const CartProduct = styled.div`
  border-top: 1px solid rgb(51, 51, 51);
`;

const CartProductList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  width: 100%;
  border-bottom: 1px solid rgb(244, 244, 244);
  #price {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

const CartProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 345px;
  @media screen and (max-width: 1050px) {
    max-width: 200px;
  }
  #productName {
    font-size: 16px;
  }
  #productTitle {
    color: rgb(153, 153, 153);
  }
`;

const CartListCheckBtn = styled.button``;

const CartListImg = styled.img`
  width: 60px;
  height: 78px;
`;

const CartListDelBtn = styled.button``;

const CartListFirst = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CartListSecond = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 540px) {
    gap: 60px;
    margin-top: 25px;
  }
`;

const CartListAmount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 88px;
  border-radius: 3px;
  height: 30px;
`;
const CartListAmountMinus = styled.button`
  width: 13px;
  height: 13px;
`;

const CartListAmountPlus = styled.button`
  width: 13px;
  height: 13px;
`;
