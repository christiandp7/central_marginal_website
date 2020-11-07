import React from 'react'
import { Navigation } from "baseui/side-navigation";

const navItems = [
  { title: 'podcast', itemId: '/podcast' },
  { title: 'archivo', itemId: '/archivo' },
  { title: 'participantes', itemId: '/participantes' },
  { title: 'guión', itemId: '/guion' },
]

function SideNav() {
  return (
    <Navigation items={navItems} />

    
  )
}

export default SideNav
