import React from "react"
import PlayerAvatar from "./index"
import morty from "./images/morty.png"

const Morty = ({ active }) => <PlayerAvatar active={active} src={morty} />

export default Morty
