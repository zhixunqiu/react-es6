import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import lazyLoad from 'Utils/utils'
import Performancedemo from './performancedemo/demo.bundle'

const App = ({ match }) => {
  return (
    <div className="content_con">
      <ul>
          <li><Link to='/performancedemo'>react性能优化</Link></li>
      </ul>
      <Switch>
        <Route path='/performancedemo' component={lazyLoad(Performancedemo)}/>
      </Switch>
    </div>
)}

export default App