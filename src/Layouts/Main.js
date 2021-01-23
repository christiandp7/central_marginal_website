import React from 'react'
//import {Grid, Cell} from 'baseui/layout-grid';
import { Block } from 'baseui/block';

import { useLocation } from "react-router-dom"

import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content'
import SpotifyButton from '../Components/Social/SpotifyButton';
//import Footer from '../Components/Footer'


/*const Main = () => {
  let location = useLocation();

  const changeSidebarOrder = () => {
    let currentPage = location.pathname;
    //console.log(currentPage)
    if(currentPage === "/"){
      return 0
    } else {
      return 1
    }
  }
  
  return (
    <>
      <Grid
        //gridColumns={}
        gridGaps={0}
        //gridGutters={0}
        gridMargins={0}
        gridMaxWidth="none"
      >
        <Cell order={changeSidebarOrder()} span={[0 ,0, 2]}>
          <Sidebar />
        </Cell>
        <Cell span={[4 ,8, 10]}>
          <Content />
        </Cell>  
      </Grid>
      <Footer position="absolute" />
    </>
  )
}*/



const Main2 = () => {
  let location = useLocation();

  const changeSidebarDirection = () => {
    let currentPage = location.pathname;
    //console.log(currentPage)
    if (currentPage === "/") {
      return null
    } else {
      return "sidebar-to-right"
    }
  }

  return (
    <>
      <Block
        //gridColumns={}
        gridGaps={0}
        //gridGutters={0}
        gridMargins={0}
        gridMaxWidth="none"
      //width="100%"
      >

        <SidebarWrapper sidebarDirection={changeSidebarDirection()}>
          <Sidebar />
        </SidebarWrapper>

        <ContentWrapper sidebarDirection={changeSidebarDirection()}>
          <Content />
        </ContentWrapper>
        {/*<Footer />*/}

        <SpotifyButton />

      </Block>
    </>
  )
}


const SidebarWrapper = ({ children, sidebarDirection }) => (
  <Block className={"sidebarWrapper " + sidebarDirection} >
    {children}
  </Block>
);

const ContentWrapper = ({ children, sidebarDirection }) => (
  <Block className={"contentWrapper " + sidebarDirection} >
    <Content />
  </Block>
)

export default Main2
