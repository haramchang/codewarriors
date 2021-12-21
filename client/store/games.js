import axios from "axios"
import history from '../history'


/**
 * ACTION TYPES
 */
const SET_GAME = 'SET_GAME'
const ADD_GAME = "ADD_GAME"

/**
 * ACTION CREATORS
 */
const setGame = (game) => ({ type: SET_GAME, game })

const _addGame = (game) => ({
  type: ADD_GAME,
  game
})

/**
 * THUNK CREATORS
 */

export const addGame = () => async dispatch => {
  try {
    const game = await axios.post("/")
    dispatch(_addGame(game))
  } catch (error) {
    console.log("error from adding game", error)
  }
}


