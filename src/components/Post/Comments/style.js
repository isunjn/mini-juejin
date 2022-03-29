import styled from "styled-components";

export const NoContent = styled.div`
  width: max-content;
  margin: 2em auto;
  color: gery;
  font-size: 1.25em;
`;

export const NoMore = styled.div`
  width: max-content;
  margin: 2em auto 5em;
  color: gery;
  font-size: 1.25em;
`;

export const Container = styled.div`
  background-color: white;
  color: grey;
`;

export const Title = styled.div`
  padding: 0.5em;
  font-size: 2em;
`;

export const CommentContainer = styled.div`
  width: 100%;
  margin: 4em 0;
  padding: 0 1em;
  display: flex;
  column-gap: 5%;
`;

export const CommentAvatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: hidden;
  width: 80%;
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .level {
      font-size: 0.75em;
      border-radius: 2px;
      background-color: tomato;
      color: white;
      padding: 1px 4px;
      margin-left: 5px;
      min-width: max-content;
    }
    .jobtitle {
      color: #b7b7b7;
    }
    .time {
      text-overflow: initial;
      min-width: max-content;
    }
  }

  .content {
    font-size: 1.1em;
    color: black;
  }
`;

export const ReplyContainer = styled.div`
  padding: 2em 1em;
  display: flex;
  column-gap: 5%;
`;

export const RepliesContainer = styled.div`
  background-color: whitesmoke;
  border-radius: 6px;
  width: calc(80%-1em);
  margin-left: calc(20%);
  margin-right: 1em;

`;