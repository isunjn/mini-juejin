import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

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
            <Link
              to={`/${params.categoryName}/${subCategory.category_name}`}
              key={subCategory.category_id}
              className={
                params.subCategoryName &&
                params.subCategoryName === subCategory.category_name
                  ? "active"
                  : ""
              }
            >
              {subCategory.category_name}
            </Link>
          ))}
        </S.Container>
      )}
    </>
  );
}

export default SubCategoryTab;
