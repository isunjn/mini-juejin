import React, { useEffect, useState } from "react";

import Loader from "../../Loader";
import InfiniteScroll from "../../InfiniteScroll";

import { getCommentsByArticleId } from "../../../services/fake-api";
import getTimeDistanceStr from "../../../utils/getTimeDistanceStr";

import * as S from "./style";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [offset, setOffset] = useState(0);
  const [noMore, setNoMore] = useState(false);

  useEffect(() => {
    async function fetchComments() {
      setIsFetching(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      const resp = await getCommentsByArticleId(postId, offset);
      setComments((comments) => comments.concat(resp.data.comments));
      setTotal(resp.total);
      if (!resp.has_more) {
        setNoMore(true);
      }
      setIsFetching(false);
    }
    fetchComments();
  }, [postId, offset]);

  const loadMore = async () => {
    setOffset(offset + 10);
  };

  return (
    <>
      <S.Container>
        <S.Title>评论 {total}</S.Title>
        {total === 0 ? (
          <S.NoContent>暂无评论</S.NoContent>
        ) : (
          <InfiniteScroll
            loadMore={loadMore}
            isFetching={isFetching}
            threshold={50}
            noMore={noMore}
          >
            {comments.map((comment) => (
              <>
                <Comment key={comment.comment_id} comment={comment} />
                {comment.reply_infos.length > 0 && (
                  <S.RepliesContainer>
                    {comment.reply_infos.map(reply => (
                        <Reply key={reply.reply_id} reply={reply} />
                    ))}
                  </S.RepliesContainer>
                )}
              </>
            ))}
          </InfiniteScroll>
        )}
        {isFetching && <Loader />}
        {!isFetching && noMore && <S.NoMore>没有更多了</S.NoMore>}
      </S.Container>
    </>
  );
}

export default Comments;

function Comment({ comment }) {
  return (
    <S.CommentContainer>
      <S.CommentAvatar src={comment.user_info.avatar_large} alt="avatar" />
      <S.CommentInfo>
        <div className="top">
          <div className="name">
            {comment.user_info.user_name}
            {comment.user_info.level > 0 && (
              <span className="level">Lv{comment.user_info.level}</span>
            )}
          </div>
          <div className="time">
            {getTimeDistanceStr(comment.comment_info.ctime)}
          </div>
        </div>
        <div className="bottom">
          <div className="content">{comment.comment_info.comment_content}</div>
        </div>
      </S.CommentInfo>
    </S.CommentContainer>
  );
}

function Reply({ reply }) {
  return (
    <S.ReplyContainer>
      <S.CommentAvatar src={reply.user_info.avatar_large} alt="avatar" />
      <S.CommentInfo>
        <div className="top">
          <div className="name">
            {reply.user_info.user_name}
            {reply.user_info.level > 0 && (
              <span className="level">Lv{reply.user_info.level}</span>
            )}
          </div>
          <div className="time">
            {getTimeDistanceStr(reply.reply_info.ctime)}
          </div>
        </div>
        <div className="bottom">
          <div className="content">{reply.reply_info.reply_content}</div>
        </div>
      </S.CommentInfo>
    </S.ReplyContainer>
  );
}


