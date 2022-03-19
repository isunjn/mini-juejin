import React from "react";
import { useOutletContext, useParams } from "react-router-dom";


import SubCategoryTab from "./SubCategoryTab";
import PostList from "../PostList";


function SubCategoriesView() {
  const {mainCategoryId, subCategories} = useOutletContext();

  const params = useParams();
  const subCategoryId = params.subCategoryId ? parseInt(params.subCategoryId) : undefined;

  return (
    <>
      <SubCategoryTab
        mainCategoryId={mainCategoryId}
        subCategoryId={subCategoryId}
        subCategories={subCategories}
      />
      

      <PostList
        categoryId={subCategoryId ? subCategoryId : mainCategoryId}
      />
    </>
  );
}

export default SubCategoriesView;
