import React, { Component } from 'react'
import HomeSlider from '../Components/HomeSlider'
import HomeSliderSlick from '../Components/HomeSliderSlick'
//import LogoVertical from '../Svg/LogoVertical'
import { LogoVertical } from '../Svg/Logo'

import { Grid, Cell } from 'baseui/layout-grid'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { H3 } from 'baseui/typography'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'

import { NavLink as Link } from 'react-router-dom'

import SliderTry from '../Components/SliderTry'

function Home() {
  return (
    <Block 
      display="flex"
      justifyContent="flex-end"
      height="100vh"
      /*display="flex"
      justifyContent="flex-end"
      flexWrap="wrap"*/
    >
      <Block width="85%" display="flex" justifyContent="flex-end" alignItems="center">
        <Block display="block" maxWidth="660px" width="100%">
          {/*<HomeSliderSlick />*/}
          <HomeSliderSlick />
        </Block>
        
      </Block>
      <Block width="15%" maxHeight="100vh" display="flex" alignItems="center" justifyContent="center" >
        <Link to="/">
          <LogoVertical />
        </Link>
      </Block>
      
    </Block>
  )
}

export default Home
