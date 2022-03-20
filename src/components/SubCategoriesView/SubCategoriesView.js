import React, { useState, useEffect } from "react";
import { useOutletContext, useParams, useSearchParams } from "react-router-dom";

import { getArticles } from "../../services/fake-api";

import SubCategoryTab from "./SubCategoryTab";
import SortByTab from "./SortByTab";
import PostList from "../PostList";


function SubCategoriesView() {
  const {mainCategoryId, subCategories} = useOutletContext();
  const params = useParams();
  const subCategoryId = params.subCategoryId ? parseInt(params.subCategoryId) : undefined;

  const categoryId = subCategoryId ? subCategoryId : mainCategoryId;

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "hot";

  const [articles, setArticles] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    async function fetchArticles() {
      const resp = await getArticles(categoryId, sortBy);
      setArticles(resp.data.articles);
      setIsFetching(false);
    }
    fetchArticles();
  }, [searchParams, categoryId, sortBy]);

  const handleSwitchSortBy = (newSortBy) => {
    setSearchParams({
      "sort": newSortBy
    });
  };

  return (
    <>
      <SubCategoryTab
        mainCategoryId={mainCategoryId}
        subCategoryId={subCategoryId}
        subCategories={subCategories}
      />
      
      <SortByTab sortBy={sortBy} handleSwitchSortBy={handleSwitchSortBy} />

      {isFetching && <p>Loading Posts...</p>}
      {articles && <PostList articles={articles} />}

    </>
  );
}

export default SubCategoriesView;
