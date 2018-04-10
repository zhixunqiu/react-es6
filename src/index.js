import React, { Component } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore,routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

render (<div>hello world</div>,document.getElementById('root'))