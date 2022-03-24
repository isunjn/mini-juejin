import React, { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import { CategoriesContext } from "../../Contexts/CategoriesContext";

import * as S from "./style";

function SubCategoryTab() {
  const categories = useContext(CategoriesContext);
  const params = useParams();
  const mainCategory = categories.find(
    (category) => category.category_name === params.categoryName
  );
  const subCategories = mainCategory.children;

  return (
    <>
      {subCategories && (
        <S.Container>
          <Link
            to={`/${params.categoryName}`}
            className={!params.subCategoryName ? "active" : ""}
          >
            全部
          </Link>

          {subCategories.map((subCategory) => (
            <NavLink
              to={`/${params.categoryName}/${subCategory.category_name}`}
              key={subCategory.category_id}
            >
              {subCategory.category_name}
            </NavLink>
          ))}
        </S.Container>
      )}
    </>
  );
}

export default SubCategoryTab;
