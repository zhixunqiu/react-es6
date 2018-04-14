import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { apiMiddleware } from 'call-api-middleware'
import * as reducers from '../reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

let middles = applyMiddleware(apiMiddleware)

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    middles
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
