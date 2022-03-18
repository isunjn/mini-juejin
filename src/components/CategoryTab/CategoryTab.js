import React from "react";

import * as S from "./style";

function CategoryTab({ categories, currentCategoryId, handleSwitchCategory }) {
  const onSwitchCategory = (id) => {
    handleSwitchCategory(id);
  };

  return (
    <S.Container>
      {categories.map((category) => (
        <S.Button
          key={category.category_id}
          active={category.category_id === currentCategoryId}
          onClick={() => onSwitchCategory(category.category_id)}
        >
          {category.category_name}
        </S.Button>
      ))}
    </S.Container>
  );
}

export default CategoryTab;
