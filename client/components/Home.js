import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import { addGame, fetchGames } from "../store/games"

export const Home = props => {
  const { username, id} = props
  const history = useHistory()

  useEffect(() => {
    // componentDidMount - show all active games
    props.setGames()
  }, [])

  function handleCreate() {
    props.addGame({ difficultyLevel: "easy", algoId: 1, userId: id })
    history.push("game")
  }

  return (
    <div id="home-container">
      <h3>Welcome, {username}</h3>

      <button onClick={handleCreate}>Create Game</button>
      <div id="open-games">
        Where the open games will go.
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
  }
}

const mapDispatch = dispatch => {
  return {
    addGame: (info) => dispatch(addGame(info)),
    setGames: () => dispatch(fetchGames())
  }
}

export default connect(mapState, mapDispatch)(Home)
