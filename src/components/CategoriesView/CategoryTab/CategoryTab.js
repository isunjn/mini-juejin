import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./style";

function CategoryTab({ categories }) {
  return (
    <S.Container>
      {categories.map((category) => (
        <NavLink
          to={`/v/${category.category_id}`}
          key={category.category_id}
        >
          {category.category_name}
        </NavLink>
      ))}
    </S.Container>
  );
}

export default CategoryTab;
