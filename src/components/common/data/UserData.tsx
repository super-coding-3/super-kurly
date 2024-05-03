interface UserDataType {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export const UserData = () => {
  let UserData: UserDataType = {
    name: "홍길동",
    phone: "010-0101-0101",
    email: "test@test.com",
    address: "서울시 마포구 합정동 000-000",
  };
  return UserData;
};
