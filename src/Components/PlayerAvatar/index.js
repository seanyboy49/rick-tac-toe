import React from "react"
import { ImageLayer } from "./styled"

const PlayerAvatar = ({ src, active }) => (
  <ImageLayer src={src} active={active} />
)

export default PlayerAvatar
