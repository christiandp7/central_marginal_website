import React, { Component } from 'react'
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'

import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { H3 } from 'baseui/typography'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { Grid, Cell } from 'baseui/layout-grid';

import { NavLink as Link } from 'react-router-dom'


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
      <Block width="15%" maxHeight="100vh" display="flex" alignItems="center" justifyContent="flex-end" >
        <Link to="/">
          <LogoVertical />
        </Link>
      </Block>
      
    </Block>
  )
}

function Home2() {
  return (
    <Grid
      gridGutters={0}
      gridMargins={0}
      gridMaxWidth="none"
    >
      <Cell span={[3,7,11]}>
        <Block
          
          height="100vh"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          maxWidth={["100%","800px"]}
          marginLeft="auto"
        >
          <HomeSliderSlick />
        </Block>
      </Cell>
      <Cell span={[1,1,1]}>
        <Block height="100vh" display="flex" alignItems="center" justifyContent="flex-end" >
          <Link to="/">
            <LogoVertical />
          </Link>
        </Block>
      </Cell>
    </Grid>
  )
}

export default Home2
