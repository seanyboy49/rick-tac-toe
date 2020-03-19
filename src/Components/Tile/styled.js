import styled from "styled-components"
import { theme } from "../../Assets/theme"

export const TileWrapper = styled.div`
  background-color: ${theme.color.blue};
  border: 2px solid ${theme.color.limeGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
