import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { CategoriesContext } from "../../Contexts/CategoriesContext";

import * as S from "./style";

function CategoryTab() {
  const categories = useContext(CategoriesContext);

  return (
    <>
      <S.Container>
        {categories.map((category) => (
          <NavLink to={`/${category.category_name}`} key={category.category_id}>
            {category.category_name}
          </NavLink>
        ))}
      </S.Container>
      
      <Outlet />
    </>
  );
}

export default CategoryTab;
