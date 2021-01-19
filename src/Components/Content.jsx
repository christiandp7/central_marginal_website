import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
//import Footer from '../Components/Footer'
import SpotifyButton from './Social/SpotifyButton';
// Pages
import Home from '../Pages/Home2'
import Podcast from '../Pages/Podcast3'
import Archivo from '../Pages/Archivo3'
import Agradecimientos from '../Pages/Agradecimientos'
//import Participantes from '../Pages/Participantes'

function Content() {
  return (
    <>
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
        <Route exact path="/agradecimientos">
          <Agradecimientos />
        </Route>
        {/*<Route exact path="/participantes">
          <Participantes />
        </Route>*/}

        <Route exact path="/404">
          <h1>404 - Not Found</h1>
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>

      <SpotifyButton />

    </>
  )
}

export default Content
