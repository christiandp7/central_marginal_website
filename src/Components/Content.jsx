import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import Home from '../Pages/Home'
import Podcast from '../Pages/Podcast'
import Archivo from '../Pages/Archivo'

function Content() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/podcast">
        <Podcast />
      </Route>
      <Route exact path="/archivo">
        <Archivo />
      </Route>

      <Route exact path="/404">
        <h1>404 - Not Found</h1>
      </Route>
      <Redirect from="*" to="/404" />
    </Switch>

    
  )
}

export default Content
