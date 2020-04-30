import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>
const TabShow = Loadable({
  loader: () => import('./tab/index'),
  loading: Loading,
})

const Wtui = ({ match }) => {
  return (
    <div>
      <ul>
          <li><Link to={`${match.url}/tab`}>Tab组件</Link></li>
      </ul>    
      <Switch>
        <Route path={`${match.url}/tab`} component={TabShow} />
      </Switch>
    </div>
)}

export default Wtui