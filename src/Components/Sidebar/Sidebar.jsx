import React from 'react'
import SideNav from './SideNav'
import SideSlider from './SideSlider'
import { Block } from 'baseui/block'

function Sidebar() {
  return (
    <Block paddingTop="50px" maxHeight="100vh">
      <SideNav />
      <Block maxWidth="100%" padding="1em 1.2em">
        <SideSlider />
      </Block>
    </Block>
  )
}

export default Sidebar
