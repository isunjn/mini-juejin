import React, { useState, useEffect, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import SortByTab from "./SortByTab";
import PostList from "../PostList";
import Loader from "../Loader";
import NotFound from "../NotFound";
import InfiniteScroll from "../InfiniteScroll";

import { getArticles } from "../../services/fake-api";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import * as S from "./style";

function PostsView() {
  const categories = useContext(CategoriesContext);
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isFetching, setIsFetching] = useState(false);
  const [articles, setArticles] = useState([]);
  const [theCategoryId, setTheCategoryId] = useState(0);
  const [notFound, setNotFound] = useState(0);
  const [offset, setOffset] = useState(0);
  const [noMore, setNoMore] = useState(false);

  const sortBy = searchParams.get("sort") || "hot";

  useEffect(() => {
    let newCategoryId = 0;
    let notFound = false;
    let mainCategory;
    if (params.categoryName) {
      mainCategory = categories.find(
        (c) => c.category_name === params.categoryName
      );
      if (mainCategory) newCategoryId = mainCategory.category_id;
      else notFound = true;
    }
    if (mainCategory && params.subCategoryName) {
      const subCategory = mainCategory.children.find(
        (c) => c.category_name === params.subCategoryName
      );
      if (subCategory) newCategoryId = subCategory.category_id;
      else notFound = true;
    }
    if (notFound) {
      setNotFound(true);
    } else {
      setOffset(0);
      setNoMore(false);
      setArticles([]);
      setTheCategoryId(newCategoryId);
    }
  }, [categories, params.categoryName, params.subCategoryName]);

  useEffect(() => {
    setIsFetching(true);
    async function fetchArticles() {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      const resp = await getArticles(theCategoryId, sortBy);
      if (!resp.has_more) {
        setNoMore(true);
      }
      setArticles(resp.data.articles);
      setIsFetching(false);
    }
    fetchArticles();
  }, [theCategoryId, sortBy]);

  const loadMore = async () => {
    setIsFetching(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const resp = await getArticles(theCategoryId, sortBy, offset + 10);
    if (!resp.has_more) {
      setNoMore(true);
    }
    setArticles((articles) => articles.concat(resp.data.articles));
    setIsFetching(false);
    setOffset(offset + 10);
  };

  const handleSwitchSortBy = (newSortBy) => {
    if (newSortBy === sortBy) return;
    setArticles([]);
    setNoMore(false);
    setSearchParams({
      sort: newSortBy,
    });
  };

  if (notFound) {
    return <NotFound />;
  }

  return (
    <>
      <SortByTab sortBy={sortBy} handleSwitchSortBy={handleSwitchSortBy} />
      {articles.length > 0 && (
        <InfiniteScroll
          loadMore={loadMore}
          isFetching={isFetching}
          threshold={50}
          noMore={noMore}
        >
          <PostList articles={articles} />
        </InfiniteScroll>
      )}
      {isFetching && <Loader center={articles.length === 0 ? true : false} />}
      {!isFetching && noMore && <S.NoMore>没有更多了</S.NoMore>}
    </>
  );
}

export default PostsView;
