import styled from "styled-components";

export const Container = styled.div`
`;

export const CategoryTab = styled.nav`
  overflow-x: auto;
  display: flex;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

  a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    border: none;
    font-size: 1.25em;
    padding: 0.5em 1em;
    &.active {
      color: #1e80ff;
    }
  }
`;
