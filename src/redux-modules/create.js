import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import clientMiddleware from './middlewares/clientMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()

export default function configureStore(client, initialState = {}) {
  // Create the store with two middlewares
  const middlewares = [
    clientMiddleware(client)
    //  sagaMiddleware
    //, logger
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers
    , initialState
    , composeWithDevTools(...enhancers)
  )

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  return store
}
