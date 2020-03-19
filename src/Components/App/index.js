import React from "react"
import { clone } from "ramda"
import GameBoard from "../GameBoard"
import Header from "../Header"
import Button from "../Button"
import ResultsPortal from "../ResultsPortal"
import { calculateDiagonals, getNextPlayer } from "../../helpers"
import { FlexContainer } from "./styled"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gameBoard: [["", "", ""], ["", "", ""], ["", "", ""]], // gameBoard is initalized as 3x3, but can work with any size if styles in GameBoard/styled.js are updated as well
      activePlayer: "Rick",
      result: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gameBoard !== this.state.gameBoard) {
      this.checkForWinner(this.state.gameBoard)
    }
  }

  restartGame() {
    this.setState({
      gameBoard: [["", "", ""], ["", "", ""], ["", "", ""]],
      activePlayer: "Rick",
      result: null
    })
  }

  checkForWinner(gameBoard) {
    // generate rows
    const rows = gameBoard.map(row => new Set(row))

    // generate columns
    const columns = gameBoard[0].map(
      (col, i) => new Set(gameBoard.map(col => col[i]))
    )

    // generate diagnols
    const diagonals = calculateDiagonals(gameBoard).map(
      diagnol => new Set(diagnol)
    )

    const allPossibleMoves = [...rows, ...columns, ...diagonals] // flatten all moves into one array

    allPossibleMoves.forEach(move => {
      if (move.size === 1 && !move.has("")) {
        this.setState({ result: "won" })
      }
    })
    if (allPossibleMoves.every(move => move.size === 2 && !move.has(""))) {
      this.setState({ result: "tie" })
    }
  }

  handleClick(position) {
    const [row, column] = position
    const { gameBoard, activePlayer, result } = this.state
    const updatedGameboard = clone(gameBoard) // make a copy of gameBoard
    updatedGameboard[row][column] = activePlayer // update the position in gameBoard with player

    if (!result)
      // disable func if there's a result to the game
      this.setState({
        gameBoard: updatedGameboard,
        activePlayer: getNextPlayer(activePlayer) // alternate activePlayer
      })
  }

  render() {
    const { activePlayer, result, gameBoard, tie } = this.state
    return (
      <FlexContainer>
        <Header activePlayer={activePlayer} result={result} />
        <ResultsPortal
          result={result}
          tie={tie}
          activePlayer={activePlayer}
          onClick={this.restartGame}
        />
        <GameBoard handleClick={this.handleClick} gameBoard={gameBoard} />
        <Button onClick={this.restartGame}>Reset Game</Button>
      </FlexContainer>
    )
  }
}

export default App
