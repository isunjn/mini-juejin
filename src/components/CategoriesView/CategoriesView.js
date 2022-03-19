import React from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";

import CategoryTab from "./CategoryTab";


function CategoriesView() {
  const categories = useOutletContext();

  const params = useParams();
  const mainCategoryId = params.categoryId ? parseInt(params.categoryId) : 0;

  const MainCategory = categories.find(c => c.category_id === mainCategoryId)
  let subCategories = [];
  if (MainCategory.children) {
    subCategories = MainCategory.children;
  }

  return (
    <>
      <CategoryTab categories={categories} />

      <Outlet context={{mainCategoryId, subCategories}} />
    </>
  );
}

export default CategoriesView;
