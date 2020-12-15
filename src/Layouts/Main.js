import React from 'react'
import {Grid, Cell} from 'baseui/layout-grid';
import {Block} from 'baseui/block';

import { useLocation } from "react-router-dom"

import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content'
import Footer from '../Components/Footer'


const Main = () => {
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
}



const Main2 = () => {
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
      <Block
        //gridColumns={}
        gridGaps={0}
        //gridGutters={0}
        gridMargins={0}
        gridMaxWidth="none"
      >
        <Block
          width="190px"
          height="100%"
          //backgroundColor="red"
          position="fixed"
          //padding="0 8px"
          //margin="0 15px"
        >
          <Sidebar />
        </Block>
        <Block
          paddingLeft={['0','0','190px']}
          //backgroundColor="#f60"
          //display="inline-block"
          minHeight="100vh"
        >
          <Content />
          {/*<Footer />*/}
        </Block>
      </Block>
    </>
  )
}

export default Main2
