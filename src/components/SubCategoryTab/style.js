import styled, { css } from "styled-components";


export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 0.2em 0.5em;
  ${p => p.active && css`
    color: white;
    background-color: orange;
  `}
`;


export const Container = styled.nav`
  overflow-x: auto;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid pink;
  background-color: whitesmoke;
`;
