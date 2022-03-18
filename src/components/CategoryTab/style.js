import styled, { css } from "styled-components";

export const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1em;
    padding: 0.5em 1em;
    ${p => p.active && css`
      color: orange;
    `}
`;

export const Container = styled.nav`
  overflow-x: auto;
  display: flex;
  border-bottom: 1px solid pink;
`;
