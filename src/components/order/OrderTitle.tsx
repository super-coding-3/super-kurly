import React from "react";
import styled from "styled-components";

type OrderTitleProps = {
  title: string;
};

const OrderTitle: React.FC<OrderTitleProps> = (props) => {
  return <OrderTitleWrap>{props.title}</OrderTitleWrap>;
};

export default OrderTitle;

const OrderTitleWrap = styled.div`
  border-bottom: 1px solid rgb(51, 51, 51);
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
`;
