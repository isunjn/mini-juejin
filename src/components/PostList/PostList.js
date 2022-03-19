import { useState, useEffect } from "react";

import { getArticles } from "../../services";
import getTimeDistanceStr from "../../utils/getTimeDistanceStr";
import getCountStr from "../../utils/getCountStr";

import viewIcon from "../../static/view.png";
import diggIcon from "../../static/digg.png";
import commentIcon from "../../static/comment.png";

import * as S from "./style";

function PostList({ tabChoice, categoryId }) {
  // TODO: history tab

  const [articles, setArticles] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    async function fetchArticles() {
      const resp = await getArticles(categoryId, tabChoice);
      setArticles(resp.data.articles);
      setIsFetching(false);
    }
    fetchArticles();
  }, [tabChoice, categoryId]);

  if (isFetching) {
    // TODO: handle
    return <>Loading</>;
  }

  return (
    <S.Container>
      {articles.map((article) => (
        <S.ListItem key={article.article_id}>
          <S.ListItemTop>
            <span>{article.author_user_info.user_name}</span>
            <span>
              {getTimeDistanceStr(
                article.article_info.mtime
                  ? article.article_info.mtime
                  : article.article_info.ctime
              )}
            </span>
          </S.ListItemTop>

          <S.ListItemBottom>
            <div>
              <h1>{article.article_info.title}</h1>
              <p>{article.article_info.brief_content}</p>
              <S.ListItemCounts>
                <span>
                  <img src={viewIcon} alt="view count" />
                  {getCountStr(article.article_info.view_count)}
                </span>
                <span>
                  <img src={diggIcon} alt="like count" />
                  {getCountStr(article.article_info.digg_count)}
                </span>
                <span>
                  <img src={commentIcon} alt="comment count" />
                  {getCountStr(article.article_info.comment_count)}
                </span>
              </S.ListItemCounts>
            </div>
            {article.article_info.cover_image && (
              <img src={article.article_info.cover_image} alt="cover" />
            )}
          </S.ListItemBottom>
        </S.ListItem>
      ))}
    </S.Container>
  );
}

export default PostList;
