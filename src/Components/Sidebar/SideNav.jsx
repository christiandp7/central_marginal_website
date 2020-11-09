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
    <Navigation 
      items={navItems}
      overrides={{
        NavItem: {
          style: ({$active, $theme}) => {
            return {
              textAlign: 'right',
              fontSize: $theme.sizing.scale750,
              ':hover': {
                color: $theme.colors.primary600,
              },
              /*backgroundColor: $theme.colors.positive400,
              borderLeftColor: $theme.colors.mono900,
              color: $theme.colors.mono900,
              ':hover': {
                color: $theme.colors.positive400,
              },*/
            }
          }
        }
      }}
    />
  )
}

export default SideNav
