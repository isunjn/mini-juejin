import React, { useEffect, useState } from "react";

import { getCommentsByArticleId } from "../../services";
import getTimeDistanceStr from "../../utils/getTimeDistanceStr";

import * as S from "./style";

function Comments({ postId }) {
  const [comments, setComments] = useState(null);
  const [total, setTotal] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
      async function fetchComments() {
        setIsFetching(true);
        const resp = await getCommentsByArticleId(postId);
        if (resp.code === 0) {
          setComments(resp.data.comments);
          setTotal(resp.total);
        }
        setIsFetching(false);
      }
      fetchComments();
  }, [postId]);

  return (
    <>
      {isFetching && <p>Loading Comments...</p>}
      {comments && (
        <S.Container>
          <S.Title>评论 {total}</S.Title>
          {comments.map(comment => 
            <Comment key={comment.comment_id} comment={comment} />
          )}
        </S.Container>
      )}
    </>
  );
}

export default Comments;


function Comment({ comment }) {
  return (
    <S.CommentContainer>
      <S.CommentAvatar src={comment.user_info.avatar_large} alt="avatar" />
      <S.CommentInfo >
        <div className="top">
          <div className="name">{comment.user_info.user_name}</div>
          {comment.user_info.level > 0 && <div className="level">Lv{comment.user_info.level}</div>}
          <div className="jobtitle">{comment.user_info.job_title}</div>
          <div className="time">{getTimeDistanceStr(comment.comment_info.ctime)}</div>
        </div>
        <div className="bottom">
          <div className="content">{comment.comment_info.comment_content}</div>
        </div>
      </S.CommentInfo>
    </S.CommentContainer>
  );
}