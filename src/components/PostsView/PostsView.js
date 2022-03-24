import React, { useState, useEffect, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import SortByTab from "./SortByTab";
import PostList from "../PostList";
import Loader from "../Loader";
import NotFound from "../NotFound";

import { getArticles } from "../../services/fake-api";

import { CategoriesContext } from "../../Contexts/CategoriesContext";

function PostsView() {
  const categories = useContext(CategoriesContext);
  const params = useParams();

  let notFound = false;
  let theCategoryId = 0;
  if (params.categoryName) {
    const mainCategory = categories.find(
      (category) => category.category_name === params.categoryName
    );
    if (!mainCategory) {
      notFound = true;
    } else if (params.subCategoryName) {
      const subCategory = mainCategory.children.find(
        (category) => category.category_name === params.subCategoryName
      );
      theCategoryId = subCategory.category_id;
    } else {
      theCategoryId = mainCategory.category_id;
    }
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "hot";

  const [articles, setArticles] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    async function fetchArticles() {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
      const resp = await getArticles(theCategoryId, sortBy);
      setArticles(resp.data.articles);
      setIsFetching(false);
    }
    fetchArticles();
  }, [theCategoryId, sortBy]);

  const handleSwitchSortBy = (newSortBy) => {
    setSearchParams({
      sort: newSortBy,
    });
  };

  return (
    <>
      {notFound && <NotFound />}
      {!notFound && (
        <>
          <SortByTab sortBy={sortBy} handleSwitchSortBy={handleSwitchSortBy} />
          {isFetching && <Loader />}
          {articles && <PostList articles={articles} />}
        </>
      )}
    </>
  );
}

export default PostsView;
