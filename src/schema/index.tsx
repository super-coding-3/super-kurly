import * as Yup from "yup";

interface FormValues {
  userId: string;
  password: string;
  passwordConfirm: string;
  userName: string;
  email: string;
  phone: string;
  address: string;
  sex: "male" | "female";
}

const defaultSchema: Yup.ObjectSchema<FormValues> = Yup.object().shape({
  userId: Yup.string()
    .required("아이디를 입력해주세요")
    .matches(/^[a-zA-Z0-9]+$/, "아이디는 영문 또는 숫자만 가능합니다"),
  password: Yup.string()
    .required("비밀번호를 입력해주세요")
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "비밀번호는 대소문자, 숫자, 특수문자를 모두 포함해야 합니다"
    ),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null!], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인을 입력해주세요"),
  userName: Yup.string()
    .required("이름을 입력해주세요")
    .matches(/^[가-힣]+$/, "이름은 한글로만 입력해주세요"),
  email: Yup.string()
    .email("유효한 이메일 주소를 입력해주세요")
    .required("이메일을 입력해주세요"),
  phone: Yup.string()
    .required("전화번호를 입력해주세요")
    .matches(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      "유효한 전화번호를 입력해주세요"
    ),
  address: Yup.string().required("주소를 입력해주세요"),
  sex: Yup.string()
    .oneOf(["male", "female"], "성별을 선택해주세요")
    .required("성별을 선택해주세요"),
});

export default defaultSchema;
