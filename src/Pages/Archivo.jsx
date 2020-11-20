import React from 'react'
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { Block } from 'baseui/block'
import { NavLink as Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

import { LogoVerticalLeft } from '../Svg/Logo'

function Archivo() {
  return (
    <Block 
      display="flex"
      justifyContent="flex-end"
      height="100vh"
      /*display="flex"
      justifyContent="flex-end"
      flexWrap="wrap"*/
    >
      <Block width="15%" maxHeight="100vh" display="flex" alignItems="center" justifyContent="flex-start" >
        <Link to="/">
          <Fade left>
            <LogoVerticalLeft />
          </Fade>
        </Link>
      </Block>
      <Block width="85%" display="flex" justifyContent="flex-end" alignItems="center">
        <Block display="block" maxWidth="660px" width="100%">
          {/*<HomeSliderSlick />*/}
          <HomeSliderSlick />
        </Block>
        
      </Block>
      
      
    </Block>
  )
}

export default Archivo
