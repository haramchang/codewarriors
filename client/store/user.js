import axios from "axios"
import history from '../history'


/**
 * ACTION TYPES
 */
const UPDATE_USER = 'UPDATE_USER'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({type: SET_AUTH, auth})

/**
 * THUNK CREATORS
 */
