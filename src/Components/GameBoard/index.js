import React from "react"
import { GameBoardWrapper } from "./styled"
import Tile from "../Tile"

const GameBoard = ({ gameBoard, handleClick }) => (
  <GameBoardWrapper>
    {gameBoard.map((row, ri) =>
      row.map((cell, ci) => (
        <Tile
          key={ci}
          handleClick={handleClick}
          position={[ri, ci]}
          move={cell}
        />
      ))
    )}
  </GameBoardWrapper>
)

export default GameBoard
