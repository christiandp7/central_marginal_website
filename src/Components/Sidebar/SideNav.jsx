import React from 'react'
import { Navigation, StyledNavItem, } from "baseui/side-navigation";
import { withRouter } from "react-router";
import { useLocation, useHistory } from "react-router-dom"
import { useStyletron } from "baseui"
import { ChevronRight, ChevronLeft } from "../../Svg/Chevron"
import { Block } from "baseui/block"

const navItems = [
  { title: 'inicio', itemId: '/' },
  { title: 'podcast', itemId: '/podcast' },
  { title: 'archivo', itemId: '/archivo' },
  { title: 'agradecimientos', itemId: '/agradecimientos' },
  //{ title: 'participantes', itemId: '/participantes' },
]

const navStyles = (theme, itemsAlign) => {
  return {
    textAlign: itemsAlign,
    fontSize: theme.sizing.scale750,
    cursor: 'pointer',
    ':hover': {
      color: theme.colors.primary600,
    },
  }
}

const navActiveStyles = (theme, itemsAlign) => {
  return {
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    //color: theme.colors.primary200,
    ...navStyles(theme, itemsAlign)
  }
}

function SideNav({itemsAlign="right"}) {
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
        NavItem: {
          component: ({children, $active}) => {
            if($active) {
              return (
                <StyledNavItem 
                  style={navActiveStyles(theme, itemsAlign)} 
                >
                  {itemsAlign === "right" && 
                    (<ChevronRightAlign />)
                  }
                    {children}
                  {itemsAlign === "left" && 
                    (<ChevronLeftAlign />)
                  }
                </StyledNavItem>
              )
            }
            return <StyledNavItem style={navStyles(theme, itemsAlign)} >{children}</StyledNavItem>
          },
        }
      }}
    />
    </React.Fragment>
  )
}

const ChevronRightAlign = () => (
  <Block
    display="inline"
    position="relative"
    top="3px"
    right="4px"
  >
    <ChevronRight size={17} />
  </Block>
)

const ChevronLeftAlign = () => (
  <Block
    display="inline"
    position="relative"
    top="3px"
    left="4px"
  >
    <ChevronLeft size={17} />
  </Block>
)


export default SideNav
