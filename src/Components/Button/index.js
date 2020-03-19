import React from "react"
import { StyledButton } from "./styled"

export const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button
