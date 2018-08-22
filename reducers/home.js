import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.INITIALIZE:
      return {
        message: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default about
