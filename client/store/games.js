import axios from "axios"
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_GAMES = 'SET_GAMES'
const ADD_GAME = "ADD_GAME"

/**
 * ACTION CREATORS
 */
const _setGames = (games) => ({
  type: SET_GAMES,
  games
})

const _addGame = (game) => ({
  type: ADD_GAME,
  game
})

/**
 * THUNK CREATORS
 */

export const fetchGames = () => async dispatch => {
  try {
    const {data: games}  = await axios.get("/api/games")
    dispatch(_setGames(games))
  } catch (error) {
    console.log("error fetching games", error)
  }
}

export const addGame = (info) => async dispatch => {
  try {
    const {data: game} = await axios.post("/api/games", info)
    dispatch(_addGame(game))
  } catch (error) {
    console.log("error from adding game", error)
  }
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case SET_GAMES:
      return action.games
    case ADD_GAME:
      return [...state, action.game]
    default:
      return state
  }
}


