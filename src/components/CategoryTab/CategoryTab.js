import React, { useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import * as S from "./style";

function CategoryTab() {
  const categories = useContext(CategoriesContext);
  const params = useParams();
  const categoryName = params.categoryName ? params.categoryName : "推荐";

  return (
    <S.Container>
      <S.CategoryTab>
        {categories.map((category) => (
          <Link
            to={`/${category.category_name}`}
            key={category.category_id}
            className={category.category_name === categoryName ? "active" : ""}
          >
            {category.category_name}
          </Link>
        ))}
      </S.CategoryTab>

      <Outlet />
    </S.Container>
  );
}

export default CategoryTab;
