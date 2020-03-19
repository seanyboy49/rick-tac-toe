import React from "react"
import { TileWrapper } from "./styled"
import { playerAvatars, getPlayerAvatar } from "../../helpers"

const Tile = ({ position, handleClick, move }) => {
  const Avatar = getPlayerAvatar(move)(playerAvatars)

  return (
    <TileWrapper onClick={() => !move && handleClick(position)}>
      {Avatar && <Avatar />}
    </TileWrapper>
  )
}

export default Tile
