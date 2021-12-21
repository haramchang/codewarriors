import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addGame, fetchGames } from "../store/games"

export const Home = props => {
  const { username, id, setGames, addGame, games } = props

  useEffect(() => {
    // componentDidMount - show all active games
    setGames()
  }, [])

  function handleCreate() {
    addGame({ difficulty: "easy", algoId: 1, userId: id })
  }

  return (
    <div id="home-container">
      <h3>Welcome, {username}</h3>

      <button onClick={handleCreate}>Create Game</button>
      <div id="open-games">
        <h1>All Open Games</h1>
          {games.map(game => (
            <button key={game.id}>Join Room</button>
          ))}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    id: state.auth.id,
    games: state.games
  }
}

const mapDispatch = dispatch => {
  return {
    addGame: (info) => dispatch(addGame(info)),
    setGames: () => dispatch(fetchGames())
  }
}

export default connect(mapState, mapDispatch)(Home)
