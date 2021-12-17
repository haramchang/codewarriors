import axios from "axios"
import history from '../history'


/**
 * ACTION TYPES
 */
const SET_GAME = 'SET_GAME'

/**
 * ACTION CREATORS
 */
const setGame = (game) => ({ type: SET_GAME, game })

/**
 * THUNK CREATORS
 */

