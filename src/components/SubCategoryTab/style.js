import styled from "styled-components";

export const Container = styled.nav`
  overflow-x: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: whitesmoke;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);

  a {
    color: black;
    text-decoration: none;
    background-color: white;
    border: none;
    border-radius: 0.8em;
    font-size: 1.2em;
    padding: 0.3em 0.6em;
    margin: 0.5em 0.5em;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    &.active {
      color: white;
      background-color: #1e80ff;
      box-shadow: 0px 1px 6px #1e80ff50;
    }
  }
`;
