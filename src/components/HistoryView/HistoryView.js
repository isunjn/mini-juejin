import React, { useState, useEffect } from "react";

import PostList from "../PostList";

import { getArticleById } from "../../services/fake-api";
import { getHistory, needToFetchHistory } from "../../services/history";

function HistoryView() {
  const [articles, setArticles] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchHistory() {
      setIsFetching(true);
      const history = await getHistory();
      if (history) {
        const articles = [];
        for (const postId of history) {
          const resp = await getArticleById(postId);
          if (resp.code === 0) {
            articles.push(resp.data.article);
          }
        }
        setArticles(articles.reverse());
      }
      setIsFetching(false);
    }
    if (needToFetchHistory()) {
      fetchHistory();
    }
  });

  return (
    <>
      {isFetching && <p>Loading history...</p>}
      {!articles && <p>No browsing history</p>}
      {articles && <PostList articles={articles} />}
    </>
  );
}

export default HistoryView;
