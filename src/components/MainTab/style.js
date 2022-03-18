import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0.5em 1em;
  ${p => p.active && css`
    color: orange;
  `}
`;

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid green;
`;
