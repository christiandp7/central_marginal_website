import React from 'react'
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'

import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'

import { NavLink as Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';


function Home() {
  return (
    <Block 
      display="flex"
      //flexWrap="wrap"
      justifyContent="flex-end"
      //justifyContent="center"
      //height="100vh"
      /*display="flex"
      justifyContent="flex-end"
      flexWrap="wrap"*/
    >
      <Block width="85%" display="flex" justifyContent="flex-end" alignItems="center">
        <Block 
          width={['100%','100%', '100%', '75%']} 
          maxWidth="1280px"
        >
            <Fade>
              <HomeSliderSlick />
            </Fade>
        </Block>
        
      </Block>
      <Block 
        width="15%" 
        overflow="hidden" 
        maxHeight="100vh" 
        display="flex" 
        alignItems="center" 
        justifyContent="flex-end" 
        paddingRight="20px"
      >
        <Link to="/">
          <Fade right>
            <LogoVertical />
          </Fade>
        </Link>
      </Block>


      {/*<Footer />*/}
    </Block>
  )
}

export default Home
