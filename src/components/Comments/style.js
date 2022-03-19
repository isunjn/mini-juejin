import styled from "styled-components";

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
  width: 15%;
  height: 15%;
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
    justify-content: space-between;
    gap: 0.5em;
    div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .level {
      height: min-content;
      align-self: center;
      font-size: 0.5em;
      border-radius: 3px;
      background-color: tomato;
      color: white;
      padding: 2px 4px;
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