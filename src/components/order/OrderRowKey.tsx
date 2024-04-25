import React from "react";
import styled from "styled-components";

type OrderRowKeyProps = {
  row: string;
};

const OrderRowKey: React.FC<OrderRowKeyProps> = (props) => {
  return <OrderRowKeyWrap>{props.row}</OrderRowKeyWrap>;
};

export default OrderRowKey;

const OrderRowKeyWrap = styled.div`
  width: 160px;
  font-weight: 500;
`;
