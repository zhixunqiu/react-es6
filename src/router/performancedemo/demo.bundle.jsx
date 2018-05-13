import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import lazyLoad from 'Utils/utils'
import Demo1 from './demo1.bundle'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
const App = ({ match }) => {
  return (
    <div>
      <ul>
          <li><Link to={`${match.url}/demo1`}>未优化程序</Link></li>
          <li><Link to={`${match.url}/demo2`}>优化程序-purerender和Immutable</Link></li>
          <li><Link to={`${match.url}/demo3`}>优化程序-purerender和Immutable-redux</Link></li>
          <li><Link to={`${match.url}/demo3`}>优化程序-purerender和Immutable-redux</Link></li>
          <li><Link to={`${match.url}/demo4`}>优化程序-子组件</Link></li>
      </ul>
      <Switch>
        <Route path={`${match.url}/demo1`} component={lazyLoad(Demo1)} />
        <Route path={`${match.url}/demo2`} component={Demo2} />
        <Route path={`${match.url}/demo3`} component={Demo3} />
        <Route path={`${match.url}/demo4`} component={Demo4} />
      </Switch>
    </div>
)}

export default App