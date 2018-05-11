import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import lazyLoad from '../utils/utils'
import Demo1 from './demo/demo1.bundle'
import Demo2 from 'bundle-loader?lazy&name=demo2!./demo/demo2'
import Demo3 from './demo/demo3'
import Demo from './demo/demo'
import Demo4 from './demo/demo4'
const App = () => (
    <div className="content_con">
      <ul>
          <li><Link to="/demo1">demo1</Link></li>
          <li><Link to="/demo2">demo2</Link></li>
          <li><Link to="/demo3">demo3</Link></li>
      </ul>
      <Switch>
        <Route path="/demo" component={Demo} />
        <Route path="/demo1" component={lazyLoad(Demo1)} />
        <Route path="/demo2" component={lazyLoad(Demo2)} />
        <Route path="/demo3" component={Demo3} />
        <Route path="/demo4" component={Demo4} />
      </Switch>
    </div>
)

export default App