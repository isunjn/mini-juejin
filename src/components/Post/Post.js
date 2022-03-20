import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comments from "../Comments";

import { getArticleById } from "../../services/fake-api";
import { addToHistory } from "../../services/history";

import getDateTimeStr from "../../utils/getDateTimeStr";

import * as S from "./style";

function Post() {
  const params = useParams();
  const postId = params.postId;

  const [post, setPost] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);
      const resp = await getArticleById(postId);
      if (resp.code === 0) {
        setPost(resp.data.article);
        addToHistory(postId);
      }
      setIsFetching(false);
    }
    fetchPost();
  }, [postId]);

  return (
    <>
      {isFetching && <p>Loading</p>}
      {post && (
        <S.Container>
          <S.Article>
            <S.Title>{post.article_info.title}</S.Title>
            <S.Meta>
              <img src={post.author_user_info.avatar_large} alt="avatar" />
              <S.MetaText>
                <div className="top">
                  <div className="name">
                    {post.author_user_info.user_name}
                  </div>
                  <div className="level">
                    Lv{post.author_user_info.level}
                  </div>
                </div>
                <div className="bottom">
                  <div className="datetime">
                    {getDateTimeStr(post.article_info.ctime)}
                  </div>
                  <div className="viewcount">
                    阅读 {post.article_info.view_count}
                  </div>
                </div>
              </S.MetaText>
            </S.Meta>
            {post.article_info.cover_image && <S.CoverImage src={post.article_info.cover_image} alt="cover" />}
            <S.Content dangerouslySetInnerHTML={{__html: post.article_content}} />
          </S.Article>
          <Comments postId={postId} />
        </S.Container>
      )}
    </>
  );
}

export default Post;
