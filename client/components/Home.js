import React from 'react'
import {connect} from 'react-redux'
import { Game } from "./Game"

export const Home = props => {
  const { username } = props

  return (
    <div id="home-container">
      <h3>Welcome, {username}</h3>
      <Game />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
