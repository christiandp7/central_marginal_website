import React, { useState } from 'react'
import { Block } from 'baseui/block'
import { Grid, Cell } from 'baseui/layout-grid';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { Button, SHAPE, KIND, SIZE } from 'baseui/button';
import IconMenu from "baseui/icon/menu";

// components
import { LogoHorizontal } from '../../Svg/Logo'
import MobileNav from '../MobileNav/MobileNav'



function Header({ noLogo, onlyMobile }) {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <Grid
        gridMargins={0}
      >
        <Cell span={12}>
          <Block display="flex" alignItems="center">

            <Button
              onClick={() => setNavOpen(true)}
              shape={SHAPE.circle}
              kind={KIND.tertiary}
              size={SIZE.large}
              $style={({ $theme }) => ({
                marginLeft: "5px",
                marginRight: "5px",
                //"@media screen and (min-width: 1136px)": {
                [$theme.mediaQuery.large]: {
                  display: "none"
                }
              })}
            >
              <IconMenu size={24} />
            </Button>

            {
              !noLogo && (
                <div className={`logo_container_hz ${onlyMobile && "onlyMobile"}`}>
                  <Link to="/">
                    <Fade top>
                      <LogoHorizontal />
                    </Fade>
                  </Link>
                </div>
              )
            }


          </Block>
        </Cell>
      </Grid>
      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </>
  )
}

export default Header
