import React, { Component } from 'react'
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical, LogoVerticalRight } from '../Svg/Logo'

import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { H3 } from 'baseui/typography'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { Grid, Cell } from 'baseui/layout-grid';

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
          {/*<HomeSliderSlick />*/}
            
              <HomeSliderSlick />
            
        </Block>
        
      </Block>
      <Block width="15%" overflow="hidden" maxHeight="100vh" display="flex" alignItems="center" justifyContent="flex-end" >
        <Link to="/">
          <Fade right>
            <LogoVertical />
          </Fade>
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
          
          /*height="100vh"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          maxWidth={["100%","800px"]}
          marginLeft="auto"*/

          /*marginTop="15%"
          maxWidth="800px"*/
        >
          
            <HomeSliderSlick />
          
        </Block>
      </Cell>
      <Cell span={[1,1,1]}>
        <Block height="100vh" overflow="hidden" display="flex" alignItems="center" justifyContent="flex-end" >
          <Link to="/">
            <Fade right>
              <LogoVertical />
            </Fade>
          </Link>
        </Block>
      </Cell>
    </Grid>
  )
}

export default Home
