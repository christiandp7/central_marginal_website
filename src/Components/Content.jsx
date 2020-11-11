import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
      <Route path="*">
        <h1>404 - Not Found</h1>
      </Route>
    </Switch>

    
  )
}

export default Content
