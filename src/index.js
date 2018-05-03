import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore,routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './store/configureStore'

//const browserHistory = createBrowserHistory()
const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store,{
//     selectLocationState (state) {
//         return state.get('routing').toObject()
//     }
// })

import App from './router/index'

render (
    <Provider store={store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
    </Provider>,document.getElementById('root'))

//render (<div>hello</div>,document.getElementById('root'))