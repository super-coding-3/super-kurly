import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainMenuContainer = styled.div`
  width: 1050px;
  height: 56px;
  margin: 0px 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #424242;
  margin: auto;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CustomFiMenu = styled(FiMenu)`
  font-size: 20px;
  margin-right: 10px;
`;

interface CategoryDropdownProps {
  show: boolean;
}

const CategoryDropdown = styled.div<CategoryDropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 10px;
  z-index: 1;
  display: ${(props) => (props.show ? "block" : "none")};
  font-weight: normal;
`;

const CategoryItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
  padding: 10px 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SubCategoryWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 200px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
`;

const SubCategoryItem = styled.div`
  padding: 5px 0;
  cursor: pointer;
  padding: 10px 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DeiliveryInfoBtn = styled.button`
  padding: 4px 20px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  font-size: 13px;
  color: #666666;
`;

const MainMenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainMenuWrapper = styled.div`
  width: 150px;
  cursor: pointer;

  &:hover {
    color: #ff914c;
    text-decoration: underline;
  }
`;

const MainMenu = () => {
  const mockData = [
    {
      id: 1,
      name: "채소",
      subcategories: [
        { id: 11, name: "친환경" },
        { id: 12, name: "고구마" },
      ],
    },
    {
      id: 2,
      name: "과일",
      subcategories: [
        { id: 21, name: "제철과일" },
        { id: 22, name: "열대과일" },
        { id: 23, name: "수입과일" },
      ],
    },
    {
      id: 3,
      name: "생선",
      subcategories: [
        { id: 31, name: "친환경" },
        { id: 32, name: "갑각류" },
      ],
    },
  ];
  const [categories, setCategories] = useState(mockData);

  //   //   카테고리 데이터 받아오는 함수
  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       try {
  //         const response = await axios.get("api_endpoint");
  //         setCategories(response.data);
  //       } catch (error) {
  //         console.error("Error fetching categories:", error);
  //       }
  //     };

  //     fetchCategories();
  //   }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categoryHovered, setCategoryHovered] = useState(null);
  const [subCategoryHovered, setSubCategoryHovered] = useState(null);

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleCategoryMouseEnter = (category: any) => {
    setCategoryHovered(category);
  };

  const handleCategoryMouseLeave = () => {
    setCategoryHovered(null);
  };

  const handleSubCategoryMouseEnter = (subCategory: any) => {
    setSubCategoryHovered(subCategory);
  };

  const handleSubCategoryMouseLeave = () => {
    setSubCategoryHovered(null);
  };

  const navigate = useNavigate();

  const handleNavigate = (path: any) => {
    navigate(path);
  };
  return (
    <MainMenuContainer onMouseLeave={handleDropdownMouseLeave}>
      <CategoryWrapper onMouseEnter={handleDropdownMouseEnter}>
        <CustomFiMenu />
        <span>카테고리</span>
        <CategoryDropdown
          show={dropdownOpen}
          onMouseLeave={handleCategoryMouseLeave}
        >
          {categories.map((category: any) => (
            <CategoryItem
              key={category.id}
              onMouseEnter={() => handleCategoryMouseEnter(category.name)}
            >
              {category.name}
              {categoryHovered === category.name && (
                <SubCategoryWrapper>
                  {category.subcategories.map((subcategory: any) => (
                    <SubCategoryItem
                      key={subcategory.id}
                      onMouseEnter={() =>
                        handleSubCategoryMouseEnter(subcategory.name)
                      }
                      onMouseLeave={handleSubCategoryMouseLeave}
                    >
                      {subcategory.name}
                    </SubCategoryItem>
                  ))}
                </SubCategoryWrapper>
              )}
            </CategoryItem>
          ))}
        </CategoryDropdown>
      </CategoryWrapper>
      <MainMenuBar>
        <MainMenuWrapper onClick={() => handleNavigate("/")}>
          신상품
        </MainMenuWrapper>
        <MainMenuWrapper onClick={() => handleNavigate("/")}>
          베스트
        </MainMenuWrapper>
        <MainMenuWrapper onClick={() => handleNavigate("/")}>
          알뜰쇼핑
        </MainMenuWrapper>
        <MainMenuWrapper onClick={() => handleNavigate("/")}>
          특가혜택
        </MainMenuWrapper>
      </MainMenuBar>
      <DeiliveryInfoBtn>배송 안내</DeiliveryInfoBtn>
    </MainMenuContainer>
  );
};

export default MainMenu;
