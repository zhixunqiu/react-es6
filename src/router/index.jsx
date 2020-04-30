import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import lazyLoad from 'Utils/utils'
import Performancedemo from './performancedemo/demo.bundle'

import Loadable from 'react-loadable'
const Loading = () => <div>Loading...</div>
const ContextDemo = Loadable({
  loader: () => import('./contextdemo/index'),
  loading: Loading,
})

const WtUi = Loadable({
  loader: () => import('./wtui/index'),
  loading: Loading,
})

const App = ({ match }) => {
  return (
    <div className="content_con">
      <ul>
          <li><Link to='/performancedemo'>react性能优化</Link></li>
          <li><Link to='/contextdemo'>react16新特性之context</Link></li>
          <li><Link to='/wtui'>组件系列</Link></li>
      </ul>
      <Switch>
        <Route path='/performancedemo' component={lazyLoad(Performancedemo)}/>
        <Route path='/contextdemo' component={ContextDemo}/>
        <Route path='/wtui' component={WtUi}/>
      </Switch>
    </div>
)}

export default App