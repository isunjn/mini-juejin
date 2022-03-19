import styled, { css } from "styled-components";

export const Container = styled.nav`
  overflow-x: auto;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid pink;
  background-color: whitesmoke;
  a {
    background-color: white;
    border: none;
    border-radius: 0.5em;
    font-size: 1em;
    padding: 0.5em 1em;
    margin: 0.2em 0.5em;
    &.active {
      color: white;
      background-color: orange;
    }
  }
`;
