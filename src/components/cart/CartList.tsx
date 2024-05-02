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

interface CartDataProps {
  productData: Array<object>;
  productSelectHandler: Function;
  productDeleteHandler: Function;
  allCheckBtnHandler: Function;
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

  return (
    <CartListWrap>
      <CartSelect
        productData={props.productData}
        allCheckBtnHandler={props.allCheckBtnHandler}
      />
      <CartProduct>
        <OrderedProductTitle
          productDropBar={productDropBar}
          setproductDropBar={setproductDropBar}
        />
        {productDropBar &&
          props.productData.map((data: any, index: number) => {
            return (
              <CartProductList>
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
                <div id="product">
                  <div id="productName">{data.option}</div>
                  <div id="productTitle">{data.title}</div>
                </div>
                <OrderedProductAmount
                  amount={productAmount}
                  setAmount={setproductAmount}
                  stock={data.stock}
                />
                <div id="price">
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </div>
                <CartListDelBtn
                  onClick={() => {
                    productDeleteHandler(data.id);
                  }}
                >
                  <IoMdClose color="rgb(221, 221, 221)" size="2em" />
                </CartListDelBtn>
              </CartProductList>
            );
          })}
      </CartProduct>
      <CartSelect
        productData={props.productData}
        allCheckBtnHandler={props.allCheckBtnHandler}
      />
    </CartListWrap>
  );
};

export default CartList;

const CartListWrap = styled.div`
  width: 742px;
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
  #product {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 345px;
  }
  #productName {
    font-size: 16px;
  }
  #productTitle {
    color: rgb(153, 153, 153);
  }
  #price {
    font-weight: 700;
    font-size: 16px;
  }
`;

const CartListCheckBtn = styled.button``;

const CartListImg = styled.img`
  width: 60px;
  height: 78px;
`;

const CartListDelBtn = styled.button``;
