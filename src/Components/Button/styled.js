import styled from "styled-components"
import { theme } from "../../Assets/theme"

export const StyledButton = styled.button`
  font-family: ${theme.fonts.secondary};
  margin: 1rem;
  color: white;
  background-color: ${theme.color.blue};
  text-align: center;
  border-radius: 0.8rem;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  outline: none;
  user-select: none;
  border-width: 0;
  flex-shrink: 0;
`
