import React from 'react'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { NavLink as Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Scrollbar from 'react-custom-scrollbars'

// components
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'
import Header from '../Components/Header/Header'


function Home2() {
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
        <Scrollbar 
          autoHideTimeout={3000} 
          //autoHeightMin="100vh"
          autoHide
          style={{ width: '100%', height: '100%' }}
        >
        </Scrollbar>       
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

export default Home2
