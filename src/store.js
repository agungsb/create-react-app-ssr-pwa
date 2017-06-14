import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createMiddleware from './createMiddleware';
//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()

export default function configureStore(client, initialState = {}) {
  // Create the store with two middlewares
  const middlewares = [
    createMiddleware(client)
    //  sagaMiddleware
    //, logger
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers
    , initialState
    , compose(...enhancers)
  )

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  return store
}
