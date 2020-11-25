import React from 'react'
import { Navigation, StyledNavItem, } from "baseui/side-navigation";
import { withRouter } from "react-router";
import { useLocation, useHistory } from "react-router-dom"
import { useStyletron } from "baseui"
import { ChevronRight } from "../../Svg/Chevron"
import { Block } from "baseui/Block"

const navItems = [
  { title: 'podcast', itemId: '/podcast' },
  { title: 'archivo', itemId: '/archivo' },
  { title: 'participantes', itemId: '/participantes' },
  { title: 'guión', itemId: '/guion' },
]

const navStyles = (theme) => {
  return {
    textAlign: 'right',
    fontSize: theme.sizing.scale750,
    cursor: 'pointer',
    ':hover': {
      color: theme.colors.primary600,
    },
  }
}

const navActiveStyles = (theme) => {
  return {
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    //color: theme.colors.primary200,
    ...navStyles(theme)
  }
}

function SideNav() {
  const [css, theme] = useStyletron();
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
        /*NavItem: {
          style: ({$active, $theme}) => {
            if($active){
              return navActiveStyles($theme)
            }
            return navStyles($theme)
          }
        },*/
      NavItem: {
        component: ({children, $active}) => {
          if($active) {
            return (
              <StyledNavItem 
                style={navActiveStyles(theme)} 
              >
                <Block
                  display="inline"
                  position="relative"
                  top="4px"
                  right="4px"
                >
                  <ChevronRight size={18} />
                </Block>
                {children}
              </StyledNavItem>
            )
          }
          return <StyledNavItem style={navStyles(theme)} >{children}</StyledNavItem>
        },
      }
        
      }}
    />
    </React.Fragment>
  )
}

export default SideNav
