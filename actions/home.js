/*  /actions/home.js
*/
import C from '../store/constants'
import fetch from 'isomorphic-fetch'

const initialize = ({ message }) => {
  return {
    type: C.INITIALIZE,
    payload: message
  }
}

export default {
  initialize: function () {
    return async dispatch => {
      let json

      try {
        let res = await fetch('/api/home')
        json = await res.json()
      } catch (err) {
        throw new Error(err.message)
      }

      await dispatch(initialize(json))
    }
  }
}
