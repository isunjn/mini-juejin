import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 3.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);

  a, button {
    color: black;
    text-decoration: none;
    border: none;
    background-color: transparent;
    font-size: 1.25em;
    margin: 0.25em 0;
    padding: 0.5em 1em;
    &.active {
      color: #1e80ff;
    }
  }
`;
