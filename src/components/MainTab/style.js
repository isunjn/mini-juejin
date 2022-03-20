import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid green;

  a {
    border: none;
    background-color: transparent;
    font-size: 1.25em;
    padding: 0.5em 1em;
    &.active {
      color: orange;
    }
  }
`;
