import { prop, find, compose } from "ramda"
import Rick from "./Components/PlayerAvatar/Rick"
import Morty from "./Components/PlayerAvatar/Morty"

export const calculateDiagonals = matrix => {
  const mainDiagonal = matrix[0].map((r, i) => matrix[i][i])

  const antiDiagonal = matrix[0].map((r, i) => matrix[i][matrix.length - 1 - i])

  return [mainDiagonal, antiDiagonal]
}

export const playerAvatars = [
  { name: "Rick", component: Rick },
  { name: "Morty", component: Morty }
]

export const getPlayerAvatar = move =>
  compose(
    prop("component"),
    find(a => a.name === move)
  )

const players = ["Rick", "Morty"]

export const getNextPlayer = activePlayer =>
  players.filter(p => p !== activePlayer)[0]
