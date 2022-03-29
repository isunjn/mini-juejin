import React, { useState, useEffect } from "react";

import PostList from "../PostList";
import Loader from "../Loader";

import { getArticleById } from "../../services/fake-api";
import historyService from "../../services/history";

import * as S from "./style";

function History() {
  const [articles, setArticles] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchHistory() {
      setIsFetching(true);
      try {
        const history = await historyService.getAll();

        if (history.items.length > 0) {
          const articles = [];
          for (const item of history.items) {
            const resp = await getArticleById(item.articleId);
            if (resp.code === 0) {
              articles.push(resp.data.article);
            }
          }
          setArticles(articles.reverse());
        }
      } catch (error) {
        console.error('error in fetching history');
      }
      setIsFetching(false);
    }
    if (historyService.needToFetchHistory()) {
      fetchHistory();
    }
  });

  return (
    <S.Container>
      {isFetching && <Loader center />}
      {(!isFetching && !articles) && <S.NoContent>无浏览记录</S.NoContent>}
      {articles && (
        <>
          <PostList articles={articles} />
          <S.NoMore>没有更多了</S.NoMore>
        </>
      )}
    </S.Container>
  );
}

export default History;
