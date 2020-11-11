import React from 'react'
import SideNav from './SideNav'
import SideSlider from './SideSlider'
import { Block } from 'baseui/block'
import { Switch, Route } from "react-router-dom"

function Sidebar() {
  return (
    <Block paddingTop="50px" maxHeight="100vh">
      <SideNav />
      <Switch>
        <Route exact path="/">
          <Block maxWidth="100%" padding="1em 12px 1em 1.2em" marginTop="25px">
            <SideSlider />
          </Block>
        </Route>
      </Switch>
    </Block>
  )
}

export default Sidebar
