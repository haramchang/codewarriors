import React from 'react'
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom"

export const Home = props => {
  const { username } = props

  return (
    <div id="home-container">
      <h3>Welcome, {username}</h3>

      <button>Create Game</button>
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
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
