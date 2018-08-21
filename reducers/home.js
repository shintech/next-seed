/*  /reducers/about.js
*/
import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.INITIALIZE:
      return {
        message: action.payload.message,
        loading: false
      }

    default:
      return state
  }
}

export default about
