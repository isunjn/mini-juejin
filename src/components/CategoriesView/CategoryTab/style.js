import styled from "styled-components";


export const Container = styled.nav`
  overflow-x: auto;
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  height: 2.5em;
  z-index: 99;

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
