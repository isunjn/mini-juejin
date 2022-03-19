import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 2em 0 6em;
  background-color: whitesmoke;
`;

export const Article = styled.article`
  margin: 3em 0;
  padding: 0 1em;
  background-color: white;
`;

export const Title = styled.h1``;

export const Meta = styled.div`
  display: flex;
  margin: 2em 0;
  color: grey;
  img {
    width: 3em;
    height: 3em;
    align-self: center;
    margin-right: 0.5em;
    border-radius: 50%;
  }
`;

export const MetaText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  justify-content: space-between;
  .top, .bottom {
    display: flex;
    column-gap: 1em;
  }
  .name {
    font-size: 1.3em;
  }
  .level {
    height: min-content;
    align-self: center;
    font-size: 0.5em;
    border-radius: 3px;
    background-color: tomato;
    color: white;
    padding: 2px 4px;
  }
`;

export const CoverImage =styled.img`
  width: 100%;

`;

export const Content = styled.div`
  border: 2px slid green;
`;
