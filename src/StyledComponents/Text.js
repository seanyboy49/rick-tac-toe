import styled, { css } from "styled-components"
import { theme } from "../Assets/theme"

export const Text = styled.div`
  font-size: 1.6rem;
  color: ${p => p.color || "white"};
  margin: 0;
  line-height: ${p => p.lh || 2.4}rem;
  font-family: ${theme.fonts.secondary};

  ${p =>
    p.strong &&
    css`
      font-weight: bold;
    `};

  ${p =>
    p.small &&
    css`
      font-size: 1.3rem;
    `};
`

export const Title = styled.h1`
  font-size: 4rem;
  font-family: ${theme.fonts.primary};
  line-height: 1;
  margin: 1rem 0;
  color: ${theme.color.blue};
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: black;
  text-shadow: 0 0 1rem ${theme.color.limeGreen};
`
