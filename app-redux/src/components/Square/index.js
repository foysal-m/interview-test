import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */
function Square({ winner, value, onClick }) {
  const update = () => {
    if (winner && winner === value) return 'highlights'
    return 'square'
  }
  return (
    <button className={update()} onClick={onClick}>
      {value}
    </button>
  )
}
const mapStateToProps = (state) => {
  return {
    winner: state.game.winner,
  }
}

Square.propTypes = {
  /**
   *  The handler for when a square is clicked
   */
  onClick: PropTypes.func,
}

export default connect(mapStateToProps)(Square)
