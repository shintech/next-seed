/*  /actions/home.js
*/
import C from '../store/constants'
import axios from 'axios'

const initialize = ({ data }) => {
  return {
    type: C.INITIALIZE,
    payload: data
  }
}

export default {
  initialize: function () {
    return async dispatch => {
      let res = await axios('/api/home')

      await dispatch(initialize(res))
    }
  }
}
