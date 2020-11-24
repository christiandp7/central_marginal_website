import React from 'react'
import SideNav from './SideNav'
import SideSlider from './SideSlider'
import { Block } from 'baseui/block'
import { Switch, Route } from "react-router-dom"

import Fade from 'react-reveal/Fade'

function Sidebar() {
  return (
    <Block paddingTop="40px" maxHeight="100vh">
      <SideNav />
      <Switch>
        <Route exact path={["/","/archivo"]}>
          <Block maxWidth="100%" padding="1em 12px 1em 12px" marginTop="20px">
            <Fade>
              <SideSlider />
            </Fade>
          </Block>
        </Route>
      </Switch>
    </Block>
  )
}

export default Sidebar
