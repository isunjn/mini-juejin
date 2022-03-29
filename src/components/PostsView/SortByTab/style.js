import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1em 0;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0 0.75em;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      color: #1e80ff;
    `}
`;
