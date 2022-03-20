import styled, { css } from "styled-components";


export const Container = styled.div`

`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0.5em 1em;
  ${p => p.active && css`
    color: orange;
  `}
`;
