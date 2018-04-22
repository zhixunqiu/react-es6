import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
const App = ({ match }) => (
    <div>
      xixi
      <Switch>
        <Route path={`${match.url}/demo1`} component={Demo1} />
        <Route path={`${match.url}/demo2`} component={Demo2} />
        <Route path={`${match.url}/demo3`} component={Demo3} />
      </Switch>
    </div>
)

export default App