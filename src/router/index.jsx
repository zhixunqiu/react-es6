import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Demo1 from './demo/demo1'
import Demo2 from './demo/demo2'
const App = () => (
    <div className="content_con">
      hihi
      <Switch>
        <Route path="/demo1" component={Demo1} />
        <Route path="/demo2" component={Demo2} />
      </Switch>
    </div>
)

export default App