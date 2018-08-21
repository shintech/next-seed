import reducers from '../reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import state from './state'

const clientLogger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const serverLogger = store => next => action => {
  console.log(`dispatching server action ${action.type}...`)
  return next(action)
}

const middleWare = server => [
  thunk,
  (server) ? serverLogger : clientLogger
]

const storeFactory = (server = false) =>
  createStore(reducers, state, applyMiddleware(...middleWare(server)))

export default storeFactory
