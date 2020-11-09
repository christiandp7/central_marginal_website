import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import HomeSliderSlick from '../Components/HomeSliderSlick'
import LogoVertical from '../Svg/LogoVertical'

import { Grid, Cell } from 'baseui/layout-grid'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { H3 } from 'baseui/typography'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'



function Home() {
  const [css, theme] = useStyletron();
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
        <Block display="block" maxWidth="700px" width="100%">
          <HomeSliderSlick />
        </Block>
        
      </Block>
      <Block width="15%" maxHeight="100vh" display="flex" alignItems="center" justifyContent="center" >
        <LogoVertical />
      </Block>
      
    </Block>
  )
}

export default Home
