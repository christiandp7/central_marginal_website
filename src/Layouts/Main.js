import React from 'react'
import {Grid, Cell} from 'baseui/layout-grid';


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

export default Main
