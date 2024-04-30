import styled from "styled-components";
import MainMenu from "../main/MainMenu";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { ChangeEvent, useState } from "react";
import { TextField, Button } from "@material-ui/core";

type Datas = {
  title: string;
  price: number;
  options: string;
  sellerName: string;
  method: string;
  country: string;
  detail: string;
  quantity: number;
};

const SellerOrder = () => {
  const initialValues: Datas = {
    title: "",
    price: 0,
    options: "",
    sellerName: "",
    method: "",
    country: "",
    detail: "",
    quantity: 0,
  };

  const fields = [
    { name: "title", label: "상품명", type: "text" },
    { name: "price", label: "가격", type: "number" },
    { name: "options", label: "옵션", type: "text" },
    { name: "method", label: "배송방법", type: "text" },
    { name: "sellerName", label: "판매자명", type: "text" },
    { name: "country", label: "원산지", type: "text" },
    { name: "quantity", label: "수량", type: "number" },
  ];

  const [imgSelect, SetImgSelect] = useState<string | null>(null);
  const [imgSelectOne, SetImgSelectOne] = useState<string | null>(null);
  const [imgSelectTwo, SetImgSelectTwo] = useState<string | null>(null);

  const handleSubmit = (values: Datas, actions: FormikHelpers<Datas>) => {
    actions.setSubmitting(true);
    console.log(values);
    actions.setSubmitting(false);
  };

  const handleImgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imgFile = event.target.files?.[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      SetImgSelect(imgUrl);
    }
  };

  const handleImgChangeOne = (event: ChangeEvent<HTMLInputElement>) => {
    const imgFile = event.target.files?.[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      SetImgSelectOne(imgUrl);
    }
  };

  const handleImgChangeTwo = (event: ChangeEvent<HTMLInputElement>) => {
    const imgFile = event.target.files?.[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      SetImgSelectTwo(imgUrl);
    }
  };

  const imgFields = [
    {
      id: 1,
      text: "제품 상세 이미지 업로드",
      img: imgSelectOne,
      onchange: handleImgChangeOne,
    },
    {
      id: 2,
      text: "상제 정보 이미지 업로드",
      img: imgSelectTwo,
      onchange: handleImgChangeTwo,
    },
  ];

  return (
    <>
      <MainMenu />
      <SellerOrderALL>
        <SellerOrderTitle>판매 상품 등록</SellerOrderTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <SellerOrderSectors>
                <SellerOrderImgDiv>
                  <SellerOrderImg src={imgSelect || ""} />
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImgChange}
                      id="upload-button"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="upload-button" onBlur={handleBlur}>
                      이미지 업로드
                    </label>
                  </div>
                </SellerOrderImgDiv>
                <InputDiv>
                  {fields.map(
                    (field, index) =>
                      index % 2 === 0 && ( // 짝수 번째 필드일 때만 그룹화
                        <SellerOrderSectorOne key={index}>
                          <div>
                            <Field
                              as={TextField}
                              type={fields[index].type}
                              name={fields[index].name}
                              label={fields[index].label}
                              value={values[fields[index].name as keyof Datas]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          {index + 1 < fields.length && ( // 다음 필드가 배열의 범위 내에 있는지 확인
                            <div>
                              <Field
                                as={TextField}
                                type={fields[index + 1].type}
                                name={fields[index + 1].name}
                                label={fields[index + 1].label}
                                value={
                                  values[fields[index + 1].name as keyof Datas]
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          )}
                        </SellerOrderSectorOne>
                      )
                  )}
                </InputDiv>
              </SellerOrderSectors>
              <SellerOrderSectorTwo>
                <SellerOrderOtherImgDiv>
                  {imgFields.map((fields) => (
                    <div key={fields.id}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={fields.onchange || ""}
                        id={`upload-button-${fields.id}`}
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor={`upload-button-${fields.id}`}
                        onBlur={handleBlur}
                      >
                        {fields.text}
                      </label>
                      <br />
                      {<input type="text" value={fields.img || ""}></input>}
                    </div>
                  ))}
                </SellerOrderOtherImgDiv>
                <DetailDiv>
                  <DetailInput
                    as="textarea"
                    type="text"
                    name="detail"
                    label="상세정보"
                    value={values.detail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="상세정보"
                    inputProps={{ style: { textAlign: "start" } }}
                  />
                </DetailDiv>
              </SellerOrderSectorTwo>
              <SellerSectorButtons>
                <Button onBlur={handleBlur}>등록</Button>
                <Button>삭제</Button>
              </SellerSectorButtons>
            </Form>
          )}
        </Formik>
      </SellerOrderALL>
      <BottomDivs></BottomDivs>
    </>
  );
};

export default SellerOrder;

const SellerOrderALL = styled.div`
  width: 1050px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 10px;
  padding: 50px 60px 80px;
  height: 1000.8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 0.3px solid grey;
  border-radius: 3px;
`;
const SellerOrderTitle = styled.h2`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 40px;
`;
const SellerOrderSectors = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
`;

const InputDiv = styled.div`
  width: 100%;
  height: 300px;
  margin-left: 80px;
`;
const SellerOrderSectorOne = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-top: 20px;
`;

const SellerOrderImgDiv = styled.div`
  width: 300px;
  height: 100px;
  margin-top: 10px;
`;

const SellerOrderImg = styled.img`
  width: 300px;
  height: 300px;
`;

const SellerOrderSectorTwo = styled.div`
  width: 100%;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

const SellerOrderOtherImgDiv = styled.div`
  width: 300px;
  height: 80px;
  margin-top: 10px;
`;

const DetailDiv = styled.div`
  width: 100%;
`;
const DetailInput = styled(Field)`
  width: 100%;
  height: 300px;
  padding-bottom: 280px;
`;

const SellerSectorButtons = styled.div`
  width: 100%;
  height: 80px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const Buttons = styled(Button)`
  width: 50px;
  height: 40px;
  border: 1px solid black;
`

const BottomDivs = styled.div`
  width: 100%;
  height: 534px;
  border-top: 1px solid gray;
  
`;
