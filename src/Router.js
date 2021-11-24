import React from 'react'
import { Switch , Route } from 'react-router'

import App from './App'
import Home from './Home'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/app" component={App}></Route>
    </Switch>
  )
}

export default Router