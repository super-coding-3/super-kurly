import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MAIN_COLOR, MAIN_LIGHT_COLOR } from "./../../constans/color";

interface HeaderProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isLogin, setIsLogin }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <HeaderWrap>
      {isLogin ? (
        <LoginInfoDiv>
          <UserNameDiv>
            <p>
              <span>User</span>님, 환영합니다
            </p>
          </UserNameDiv>
          <Bar />
          <div>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        </LoginInfoDiv>
      ) : (
        <LoginInfoDiv>
          <div>
            <Link to={"/signup"} className="active">
              회원가입
            </Link>
          </div>
          <Bar />
          <div>
            <Link to={"/login"}>로그인</Link>
          </div>
        </LoginInfoDiv>
      )}
      <HeaderContentDiv>
        <Logo to={"/"}>
          <img src="img/common/logo-kurly.png" alt="슈퍼컬리 로고" />
          <span>마켓컬리</span>
        </Logo>
        <SearchDiv>
          <input type="text" />
          <button>
            <img src="img/common/search.svg" alt="" />
          </button>
        </SearchDiv>
        <BtnWrapDiv>
          <button>
            <img src="img/common/icon-map.svg" alt="" />
          </button>
          <button>
            <img src="img/common/icon-heart.svg" alt="" />
          </button>
          <button>
            <img src="img/common/icon-cart.svg" alt="" />
          </button>
        </BtnWrapDiv>
      </HeaderContentDiv>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px 1rem 0;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const LoginInfoDiv = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    a,
    button {
      color: #333;
      font-size: 12px;
      display: block;
      &.active {
        color: ${MAIN_COLOR};
      }
    }
  }
  @media (max-width: 768px) {
  }
`;

const UserNameDiv = styled.div`
  p {
    color: #888;
    font-size: 12px;
    span {
      color: ${MAIN_COLOR};
      font-weight: 500;
    }
  }
`;

const Bar = styled.div`
  width: 1px;
  height: 13px;
  background-color: rgb(217, 217, 217);
`;

const HeaderContentDiv = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 4rem;
  @media (max-width: 1024px) {
    width: 90%;

    justify-content: center;
  }
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: flex-end;
  gap: 10px;
  img {
    width: 140px;
  }
  span {
    font-weight: 500;
    color: ${MAIN_COLOR};
    font-size: 18px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const SearchDiv = styled.div`
  position: relative;
  width: 400px;
  input {
    border: 1px solid ${MAIN_COLOR};
    height: 38px;
    width: 100%;
    border-radius: 5px;
    text-indent: 10px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const BtnWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Header;
