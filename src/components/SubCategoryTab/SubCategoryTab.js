import React from "react";

import * as S from "./style";

function SubCategoryTab({
  subCategories,
  currentSubCategoryId,
  handleSwitchSubCategory,
}) {
  if (!subCategories) return null;

  const onSwitchSubCategory = (id) => {
    handleSwitchSubCategory(id);
  };

  return (
    <S.Container>
      <S.Button 
        active={!currentSubCategoryId}
        onClick={() => onSwitchSubCategory(undefined)}
      >
        全部
      </S.Button>

      {subCategories.map((subCategory) => (
        <S.Button
          key={subCategory.category_id}
          active={subCategory.category_id === currentSubCategoryId}
          onClick={() => onSwitchSubCategory(subCategory.category_id)}
        >
          {subCategory.category_name}
        </S.Button>
      ))}
    </S.Container>
  );
}

export default SubCategoryTab;
