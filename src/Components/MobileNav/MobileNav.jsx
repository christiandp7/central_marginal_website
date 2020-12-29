import React from 'react'
import { Block } from "baseui/block";
import {Drawer, ANCHOR} from 'baseui/drawer'

// components
import SideNav from '../Sidebar/SideNav'

function MobileNav({ isOpen, setIsOpen}) {
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => setIsOpen(false)}
      anchor={ANCHOR.left}
    >
      <Block marginTop="30px">
        <SideNav itemsAlign="left" />
      </Block>
    </Drawer>
  )
}

export default MobileNav
