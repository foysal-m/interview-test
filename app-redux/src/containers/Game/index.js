import React from 'react'
import Board from '../../components/Board'

import { selectSquare, selectMove } from '../../redux/game/index'
import { connect } from 'react-redux'

/**
 * A game of tic-tac-toe in functional component using react hooks.
 */

function Game({
  winner,
  xIsNext,
  history,
  stepNumber,
  jumpToMove,
  handleClick,
}) {
  const current = history[stepNumber]

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => jumpToMove(move)}>{desc}</button>
      </li>
    )
  })

  function statusUpdate() {
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'Y')
    }
    return status
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{statusUpdate()}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    winner: state.game.winner,
    xIsNext: state.game.xIsNext,
    history: state.game.history,
    stepNumber: state.game.stepNumber,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (squareNumber) => dispatch(selectSquare(squareNumber)),
    jumpToMove: (moveNumber) => dispatch(selectMove(moveNumber)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
