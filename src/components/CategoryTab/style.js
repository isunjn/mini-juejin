import styled from "styled-components";

export const Container = styled.div``;

export const CategoryTab = styled.nav`
  overflow-x: auto;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  height: 2.5em;

  a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    border: none;
    font-size: 1.25em;
    margin: 0 0.75em;
    white-space: nowrap;
    &.active {
      color: #1e80ff;
    }
  }
`;
