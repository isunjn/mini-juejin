import styled from "styled-components";


export const Container = styled.nav`
  overflow-x: auto;
  display: flex;
  border-bottom: 1px solid pink;

  a {
    background-color: transparent;
    border: none;
    font-size: 1em;
    padding: 0.5em 1em;
    &.active {
      color: orange;
    }
  }
`;
