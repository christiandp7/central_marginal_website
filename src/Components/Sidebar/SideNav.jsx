import React from 'react'
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router";
import { useLocation, useHistory } from "react-router-dom"

const navItems = [
  { title: 'podcast', itemId: '/podcast' },
  { title: 'archivo', itemId: '/archivo' },
  { title: 'participantes', itemId: '/participantes' },
  { title: 'guión', itemId: '/guion' },
]

function SideNav() {
  let location = useLocation();
  let history = useHistory();
  return (
    <React.Fragment>
    <Navigation 
      items={navItems}
      activeItemId={location.pathname}
      onChange={({event, item}) => {
        // prevent page reload
        event.preventDefault();
        history.push(item.itemId);
      }}
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
    </React.Fragment>
  )
}

export default SideNav
