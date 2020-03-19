import React from "react"
import { HeaderWrapper, PlayerWrap } from "./styled"
import { Text, Title } from "../../StyledComponents/Text"
import Rick from "../PlayerAvatar/Rick"
import Morty from "../PlayerAvatar/Morty"

const Header = ({ result, activePlayer }) => (
  <HeaderWrapper>
    <Title>Rick Tac Toe</Title>
    <PlayerWrap>
      <Rick active={activePlayer === "Rick"} />
      <Text small strong>
        {result ? `Game Over` : `${activePlayer}'s turn`}
      </Text>
      <Morty active={activePlayer === "Morty"} />
    </PlayerWrap>
  </HeaderWrapper>
)

export default Header
