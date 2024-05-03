import styled from "styled-components";
import MainMenu from "../main/MainMenu";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { ChangeEvent, useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { submitData } from "./Api";
import { ChangeEventHandler } from "react";

export interface Datas {
  model: {
    name: string;
    amount: number;
    price: number;
    description: string;
    optionName: string;
    origin: string;
    shippingMethod: string;
    sellerName: string;
    imgFile: File | null;
    descriptionImg: string;
    productInformationImg: string;
  };
}

// interface ImgField {
//   id: number;
//   text: string;
//   img: string | null;
//   onchange: ChangeEventHandler<HTMLInputElement>; // ChangeEventHandler 타입 사용
// }

export const initialFomData: Datas = {
  model: {
    name: "",
    amount: 0,
    price: 0,
    description: "",
    optionName: "",
    origin: "",
    shippingMethod: "",
    sellerName: "",
    imgFile: null,
    descriptionImg: "",
    productInformationImg: "",
  },
};

const SellerOrder = () => {
  const [formData, setFormData] = useState<Datas>(initialFomData);
  const [images, setImages] = useState<string[]>([]);

  const fileRef = useRef<HTMLInputElement>(null);
  // input click method
  const handleClick = () => {
    fileRef?.current?.click();
  };

  const fields = [
    { name: "model.name", label: "상품명", type: "text" },
    { name: "model.amount", label: "수량", type: "number" },
    { name: "model.price", label: "가격", type: "number" },
    { name: "model.optionName", label: "옵션", type: "text" },
    { name: "model.origin", label: "원산지", type: "text" },
    { name: "model.shippingMethod", label: "배송방법", type: "text" },
    { name: "model.sellerName", label: "판매자명", type: "text" },
  ];

  // const [imgSelect, SetImgSelect] = useState<string | null>(null);
  // const [imgSelectOne, SetImgSelectOne] = useState<string | null>(null);
  // const [imgSelectTwo, SetImgSelectTwo] = useState<string | null>(null);

  const handleChanges = async (fieldName: keyof Datas["model"], e: React.ChangeEvent) => {
    
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
    if (targetFilesArray.length > 0) {
      const selectedFiles: File[] = targetFilesArray;
      const urls: string[] = selectedFiles.map((file) => URL.createObjectURL(file));
      setFormData((prev) => ({
        model: {
          ...prev.model,
          [fieldName]: selectedFiles[0],
          "imgFile":selectedFiles[0] // fieldName에 해당하는 파일 추가
        },
      }));
    }
    console.log(formData)
    console.log(targetFilesArray)
    console.log(selectedFiles)
  };

  const handleSubmit = async (values: Datas, actions: FormikHelpers<Datas>) => {
    actions.setSubmitting(true);
    try {
      // await submitData({
      //   model: {
      //     name: values.model.name,
      //     amount: values.model.amount,
      //     price: values.model.price,
      //     description: values.model.description,
      //     optionName: values.model.optionName,
      //     origin: values.model.origin,
      //     shippingMethod: values.model.shippingMethod,
      //     sellerName: values.model.sellerName,
      //     imgFile: values.model.imgFile,
      //     descriptionImg: values.model.descriptionImg,
      //     productInformationImg: values.model.productInformationImg,
      //   },
      // });
      await submitData(values)
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Error 발생", error);
      actions.setSubmitting(false);
    }
  };

  // const handleImgChange =
  //   (fieldName: keyof Datas) => (e: ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       setFormData((prevState) => ({
  //         ...prevState,
  //         [fieldName]: file, // imgFile 대신 fieldName으로 변경
  //       }));
  //     }
  //   };

  // const handleImgChangeOne = (
  //   fieldName: keyof Datas["descriptionImage"],
  //   imgFile: File | null
  // ) => {
  //   if (imgFile) {
  //     const imgUrl = URL.createObjectURL(imgFile);
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [fieldName]: imgUrl,
  //     }));
  //   }
  // };

  // const handleImgChangeTwo = (
  //   fieldName: keyof Datas["productInformationImage"],
  //   imgFile: File | null
  // ) => {
  //   if (imgFile) {
  //     const imgUrl = URL.createObjectURL(imgFile);
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [fieldName]: imgUrl,
  //     }));
  //   }
  // };

  // const imgFields:ImgField[] = [
  //   {
  //     id: 1,
  //     text: "제품 상세 이미지 업로드",
  //     img: formData.descriptionImage,
  //     onchange:(e)=> handleImgChange("descriptionImage", e.target.files?.[0] || null)
  //   },
  //   {
  //     id: 2,
  //     text: "상제 정보 이미지 업로드",
  //     img: formData.productInformationImage,
  //     onchange:(e)=> handleImgChange("productInformationImage", e.target.files?.[0] || null),
  //   },
  // ];

  return (
    <>
      <MainMenu />
      <SellerOrderALL>
        <SellerOrderTitle>판매 상품 등록</SellerOrderTitle>
        <Formik initialValues={initialFomData} onSubmit={handleSubmit}>
          {({ values, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <SellerOrderSectors>
                <SellerOrderImgDiv>
                  <label htmlFor="file">사진 첨부</label>
                  {images.map((imageUrl, index) => (
                    <SellerOrderImg
                      key={index}
                      src={imageUrl}
                      alt={`Image ${index}`}
                    />
                  ))}
                  <div onClick={handleClick}>
                    <input
                      type="file"
                      name="model.imgFile"
                      accept="image/*"
                      onChange={(e) => handleChanges("imgFile", e)}
                      id="upload-button-img"
                      style={{}}
                    />
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
                  {/* {imgFields.map((fields) => (
                    <div key={fields.id}>
                       <label
                        htmlFor={`upload-button-${fields.id}`}
                        onBlur={handleBlur}
                        style={{ marginBottom: "16px" }}
                      >
                        {fields.text}
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={fields.onchange}
                       style={{marginTop:"5px", marginBottom:"5px"}}
                      />
                      <br />
                      {
                        <input
                          type="text"
                          value={fields.img || ""}
                          style={{ marginTop: "4px" }}
                        ></input>
                      }
                    </div>
                  ))} */}
                </SellerOrderOtherImgDiv>
                <DetailDiv>
                  <DetailInput
                    as="textarea"
                    type="text"
                    name="model.description"
                    label="상세정보"
                    value={values.model.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="상세정보"
                    inputProps={{ style: { textAlign: "start" } }}
                  />
                </DetailDiv>
              </SellerOrderSectorTwo>
              <SellerSectorButtons>
                <Buttons type="submit" onBlur={handleBlur}>
                  등록
                </Buttons>
                <Buttons onBlur={handleBlur}>삭제</Buttons>
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
  border-radius: 2px;
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
  margin-top: 70px;
  margin-left: 800px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Buttons = styled(Button)`
  width: 50px;
  height: 40px;
  border: 1px solid black;
`;

const BottomDivs = styled.div`
  width: 100%;
  height: 534px;
  border-top: 1px solid gray;
`;
