import React from 'react'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { NavLink as Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

// components
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'
import Header from '../Components/Header/Header'


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
      <Block position="relative" width="85%" display="flex" justifyContent="flex-end" alignItems="center">
        <Block 
          position="absolute" 
          display={["block","block","block", "none"]} 
          top={["0","8px","18px","0"]}
          left="0"
        >
          <Header noLogo />
        </Block>
        <Block 
          width={['100%','100%', '100%', '75%']} 
          maxWidth="1280px"
          className="homeSlider_container"
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
        paddingRight={["0","5px","10px","20px"]}
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
