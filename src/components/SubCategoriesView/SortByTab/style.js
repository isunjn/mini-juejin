import styled, { css } from "styled-components";


export const Container = styled.div`
  margin: 2em 0 1em 0;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0 0.5em;
  ${p => p.active && css`
    color: #1e80ff;
  `}
`;
