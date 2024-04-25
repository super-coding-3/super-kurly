import React from "react";
import styled from "styled-components";

const GoodsReview: React.FC = () => {
  const GoodsReviewData = [
    {
      membership: "일반",
      name: "홍길동",
      product: "[비비고] 왕교자 455G*2",
      contents: "믿고먹는비비고입니다!",
      date: "2024.04.25",
      img: "https://img-cf.kurly.com/cdn-cgi/image/width=240,height=240,fit=crop,quality=85/shop/data/review/20240424/4cbbd57f-6344-4efa-8c61-c8fce2cb0be8.jpg",
    },
    {
      membership: "멤버스",
      name: "김길동",
      product: "[쿳킷x비비고] 왕교자 사골 떡만두국",
      contents: "매일 먹고싶은 맛이에요!",
      date: "2024.04.26",
      img: "https://img-cf.kurly.com/cdn-cgi/image/width=240,height=240,fit=crop,quality=85/shop/data/review/20240425/f82b8e12-7669-47ea-860c-b202e75ad696.jpg",
    },
    {
      membership: "프렌즈",
      name: "최길동",
      product: "[비비고] 왕교자 455G*2",
      contents: "존맛탱탱구리~!!",
      date: "2024.04.27",
      img: "https://img-cf.kurly.com/cdn-cgi/image/width=240,height=240,fit=crop,quality=85/shop/data/review/20240425/8f59a3fa-f25b-4aae-921e-0c686e9fc05b.jpg",
    },
  ];

  return (
    <GoodsReviewWrap>
      <GoodsReviewTitle>상품 후기</GoodsReviewTitle>
      <GoodsReviewImg>
        {GoodsReviewData.map((data) => {
          return (
            <button>
              <img src={data.img} />
            </button>
          );
        })}
      </GoodsReviewImg>
      <GoodsReviewFilter>
        <button>
          <div>상품 옵션</div>
          <img src="/img/goods/DownArrow.svg" />
        </button>
        <button>
          <div>회원 등급</div>
          <img src="/img/goods/DownArrow.svg" />
        </button>
      </GoodsReviewFilter>
      <GoodsReviewTable>
        {GoodsReviewData.map((data) => {
          return (
            <GoodsReviewList>
              <GoodsReviewUser>
                {data.membership === "멤버스" ? (
                  <div id="members">{data.membership}</div>
                ) : (
                  <div id="normal">{data.membership}</div>
                )}
                <div id="name">{data.name}</div>
              </GoodsReviewUser>
              <GoodsReviewContents>
                <div id="product">{data.product}</div>
                <div id="contents">{data.contents}</div>
                <img id="reviewphoto" src={data.img} />
                <footer>
                  <div>{data.date}</div>
                  <button>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoCiAgICBkPSJNNC4wNDgzNyAxMi45OTk4SDIuMjE5MzVDMS41NDU5MiAxMi45OTk4IDEgMTIuNDYyNiAxIDExLjc5OTlWNy41OTk5MkMxIDYuOTM3MTggMS41NDU5MiA2LjM5OTkzIDIuMjE5MzUgNi4zOTk5M0g0LjA0ODM3TTguMzE2MDggNS4xOTk5NVYyLjc5OTk4QzguMzE2MDggMS44MDU4OCA3LjQ5NzIgMSA2LjQ4NzA2IDFMNC4wNDgzNyA2LjM5OTkzVjEyLjk5OTlIMTAuOTI1NUMxMS41MzM1IDEzLjAwNjYgMTIuMDUzNyAxMi41NzE1IDEyLjE0NDggMTEuOTc5OUwxMi45ODYyIDYuNTc5OTNDMTMuMDM5OSA2LjIzMTg1IDEyLjkzNTUgNS44NzgxMiAxMi43MDA4IDUuNjEyNDVDMTIuNDY2IDUuMzQ2NzggMTIuMTI0NiA1LjE5NTk2IDExLjc2NjggNS4xOTk5NUg4LjMxNjA4WiIKICAgIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIxLjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" />
                    <div>도움돼요</div>
                  </button>
                </footer>
              </GoodsReviewContents>
            </GoodsReviewList>
          );
        })}
      </GoodsReviewTable>
    </GoodsReviewWrap>
  );
};

const GoodsReviewWrap = styled.div`
  margin-top: 100px;
  width: 1010px;
`;

const GoodsReviewTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: start;
`;

const GoodsReviewImg = styled.div`
  margin: 20px 0 30px;
  display: flex;
  gap: 3px;
  button {
    width: 124px;
    height: 124px;
  }
  img {
    border-radius: 6px;
    width: 100%;
  }
`;

const GoodsReviewFilter = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 10px 9px 14px;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    gap: 4px;
    border-radius: 18px;
  }
  img {
    width: 12px;
    height: 12px;
  }
`;

const GoodsReviewTable = styled.div`
  border-top: 1px solid rgb(51, 51, 51);
`;

const GoodsReviewList = styled.div`
  display: flex;
  padding: 30px 0px 19px 20px;
  border-bottom: 1px solid rgb(244, 244, 244);
  font-weight: 400;
`;

const GoodsReviewUser = styled.div`
  width: 225px;
  display: flex;
  gap: 5px;
  #normal {
    height: 18px;
    border: 1px solid rgb(95, 0, 128);
    color: rgb(95, 0, 128);
    border-radius: 3px;
    padding: 3px 4px 3px 5px;
    font-size: 10px;
  }
  #members {
    height: 18px;
    border: 1px solid rgb(77, 190, 215);
    border-radius: 3px;
    font-size: 10px;
    padding: 3px 4px 3px 5px;
    background-color: rgb(77, 190, 215);
    color: rgb(255, 255, 255);
  }
`;

const GoodsReviewContents = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  #product {
    color: rgb(153, 153, 153);
  }

  #reviewphoto {
    width: 93px;
    height: 93px;
    border-radius: 6px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    color: rgb(153, 153, 153);
    button {
      display: flex;
      align-items: center;
      gap: 3px;
      width: 88px;
      height: 32px;
      padding: 0px 13px 0px 11px;
      border: 1px solid rgb(226, 226, 226);
      font-size: 12px;
      border-radius: 20px;
      color: rgb(153, 153, 153);
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export default GoodsReview;
