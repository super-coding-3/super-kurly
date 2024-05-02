import React, { useState } from "react";
import styled from "styled-components";
import OrderedProductTitle from "../common/OrderedProductTitle";

interface OrderDataProps {
  // orderData: Array<object>;
  orderData: any;
}

const OrderProduct: React.FC<OrderDataProps> = (props) => {
  const [productDropBar, setproductDropBar] = useState(false);

  return (
    <OrderProductWrap>
      <OrderedProductTitle
        productDropBar={productDropBar}
        setproductDropBar={setproductDropBar}
      />
      {productDropBar ? (
        props.orderData.map((data: any) => {
          return (
            <OrderProductContentsDrop>
              <img src={data.img} />
              <div id="product">
                <div id="productName">{data.title}</div>
                <div id="productTitle">{data.option}</div>
              </div>
              {/* TODO 장바구니의 수량으로 변경 필요 */}
              <div>{data.stock}</div>
              <div id="price">
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </OrderProductContentsDrop>
          );
        })
      ) : (
        <OrderProductContents>
          {props.orderData[0].title} 외 {props.orderData.length - 1}개 상품을
          주문합니다.
        </OrderProductContents>
      )}
    </OrderProductWrap>
  );
};

export default OrderProduct;

const OrderProductWrap = styled.div`
  margin-top: 48px;
  width: 1050px;
  @media screen and (max-width: 1050px) {
    max-width: 742px;
  }
  @media screen and (max-width: 742px) {
    max-width: 540px;
  }
  @media screen and (max-width: 540px) {
    max-width: 340px;
  }
`;

const OrderProductContents = styled.div`
  padding: 28px 0px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const OrderProductContentsDrop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
  img {
    width: 60px;
    height: 78px;
  }
  #product {
    display: flex;
    flex-direction: column;
    width: 700px;
    gap: 10px;
    @media screen and (max-width: 1050px) {
      max-width: 500px;
    }
    @media screen and (max-width: 742px) {
      max-width: 300px;
    }
    @media screen and (max-width: 540px) {
      max-width: 100px;
    }
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
