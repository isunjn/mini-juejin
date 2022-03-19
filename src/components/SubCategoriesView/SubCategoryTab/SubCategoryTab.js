import React from "react";
import { Link, NavLink } from "react-router-dom";

import * as S from "./style";

function SubCategoryTab({ mainCategoryId, subCategoryId, subCategories }) {
  if (mainCategoryId === 0) {
    return null;
  }
  return (
    <S.Container>
      <Link to={`/v/${mainCategoryId}`} className={!subCategoryId ? 'active' : ''}>
        全部
      </Link>

      {subCategories.map((subCategory) => (
        <NavLink
          to={`/v/${mainCategoryId}/${subCategory.category_id}`}
          key={subCategory.category_id}
        >
          {subCategory.category_name}
        </NavLink>
      ))}
    </S.Container>
  );
}

export default SubCategoryTab;
