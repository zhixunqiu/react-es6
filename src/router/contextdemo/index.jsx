import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Loadable from 'react-loadable'

//import ThemeChange from './themedemo/index'
const Loading = () => <div>Loading...</div>
const ThemeChange = Loadable({
  loader: () => import('./themedemo/index'),
  loading: Loading,
})

const ThemeToggle = Loadable({
    loader: () => import('./themedemo2/index'),
    loading: Loading,
  })

const App = ({ match }) => {
  return (
    <div>
      <ul>
          <li><Link to={`${match.url}/theme`}>主题改变</Link></li>
          <li><Link to={`${match.url}/theme2`}>主题改变-改变函数存放在context中</Link></li>
      </ul>
      <Switch>
        <Route path={`${match.url}/theme`} component={ThemeChange} />
        <Route path={`${match.url}/theme2`} component={ThemeToggle} />
      </Switch>
    </div>
)}

export default App