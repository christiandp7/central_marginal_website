import React, { Component } from 'react'
import HomeSlider from '../Components/HomeSlider'
import HomeSliderSlick from '../Components/HomeSliderSlick'
import LogoVertical from '../Svg/LogoVertical'

import { Grid, Cell } from 'baseui/layout-grid'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import { H3 } from 'baseui/typography'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'


import SliderTry from '../Components/SliderTry'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
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
          <LogoVertical />
        </Block>
        
      </Block>
    )
  }
}

export default Home
