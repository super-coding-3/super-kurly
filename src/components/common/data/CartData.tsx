interface CartDataType {
  id: string;
  img: string;
  title: string;
  price: number;
  delivery: string;
  seller: string;
  origin: string;
  option: string;
  amount: number;
  stock: number;
  select: boolean;
}

export const CartData = () => {
  let CartData: CartDataType[] = [
    {
      id: "product_1",
      img: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/a67c9c98-39a1-4018-ab75-5dc1a8402c3a.jpg",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      price: 7150,
      delivery: "샛별배송",
      seller: "컬리",
      origin: "상품설명/상세정보 참조",
      option: "간편식1",
      amount: 1,
      stock: 10,
      select: false,
    },
    {
      id: "product_2",
      img: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/a67c9c98-39a1-4018-ab75-5dc1a8402c3a.jpg",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      price: 7150,
      delivery: "샛별배송",
      seller: "컬리",
      origin: "상품설명/상세정보 참조",
      option: "간편식1",
      amount: 1,
      stock: 10,
      select: false,
    },
    {
      id: "product_3",
      img: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/a67c9c98-39a1-4018-ab75-5dc1a8402c3a.jpg",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      price: 7150,
      delivery: "샛별배송",
      seller: "컬리",
      origin: "상품설명/상세정보 참조",
      option: "간편식1",
      amount: 1,
      stock: 10,
      select: false,
    },
    {
      id: "product_4",
      img: "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/a67c9c98-39a1-4018-ab75-5dc1a8402c3a.jpg",
      title: "[비비고x고메] 간편식 골라담기 9종 (택1)",
      price: 7150,
      delivery: "샛별배송",
      seller: "컬리",
      origin: "상품설명/상세정보 참조",
      option: "간편식1",
      amount: 1,
      stock: 10,
      select: false,
    },
  ];
  return CartData;
};
