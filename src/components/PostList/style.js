import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5em 0 2em;
`;

export const ListItem = styled.div`
  width: calc(100vw - 1.5em);
  margin: 0 0.75em;
  padding: 0.75em 0;
  border-bottom: 1.5px solid #3b3b3b3b;
  color: grey;
  cursor: pointer;
`;

export const ListItemTop = styled.div`
  width: 100%;
  span {
    padding-right: 0.5em;
  }
  span + span {
    padding-left: 0.5em;
    border-left: 2px solid whitesmoke;
  }
`;

export const ListItemBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    width: 65%;
    &:only-child {
      width: 100%;
    }
  }

  h1 {
    color: initial;
    max-width: 100%;
    margin-bottom: 0;
    overflow: hidden;
    font-size: 1.25em;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    margin: 0 1%;
    max-width: 33%;
  }
`;

export const ListItemCounts = styled.div`
  span {
    display: inline-flex;
    padding-right: 0.5em;
  }
  span + span {
    padding-left: 0.5em;
  }
  img {
    width: 1em;
    margin: 0 0.2em;
    align-self: center;
  }
`;
