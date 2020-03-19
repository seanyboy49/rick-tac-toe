import styled, { css } from "styled-components"

export const ImageLayer = styled.div`
  margin: auto;
  height: 5rem;
  width: 5rem;
  background: url(${p => p.src}) center center / cover no-repeat;
  ${p =>
    p.active &&
    css`
      transform: scale(1.2);
      transition: 0.2s;
    `}
`
