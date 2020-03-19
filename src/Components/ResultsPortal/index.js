import React from "react"
import { ResultsPortalWrap, ResultsContent, PortalLayer } from "./styled"
import { Text } from "../../StyledComponents/Text"
import portal from "./portal.png"
import { playerAvatars, getPlayerAvatar, getNextPlayer } from "../../helpers"

const ResultsPortal = ({ result, activePlayer, onClick }) => {
  if (result === "won") {
    const winner = getNextPlayer(activePlayer)
    const Avatar = getPlayerAvatar(winner)(playerAvatars)
    return (
      <ResultsPortalWrap onClick={onClick}>
        <ResultsContent>
          <Text strong>{winner} wins!</Text>
          {Avatar && <Avatar />}
        </ResultsContent>
        <PortalLayer src={portal} />
      </ResultsPortalWrap>
    )
  }
  if (result === "tie")
    return (
      <ResultsPortalWrap onClick={onClick}>
        <ResultsContent>
          <Text strong>It's a tie!</Text>
        </ResultsContent>
        <PortalLayer src={portal} />
      </ResultsPortalWrap>
    )
  return null
}
export default ResultsPortal
