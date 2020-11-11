import React, {  } from 'react'
import {useStyletron} from 'baseui';
import {styled} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import { Block } from 'baseui/block'


import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content'
import Footer from '../Components/Footer'

const SidebarStyled = styled('div', ({$theme}) => ({
  //backgroundColor: "#f60",
}));

const ContentStyled = styled('div', ({$theme}) => ({
  //backgroundColor: $theme.colors.backgroundAccent,
}));



const Main = () => {
  const [css, theme] = useStyletron();
  
  return (
    <React.Fragment>
    <Grid
      //gridColumns={}
      gridGaps={0}
      gridGutters={0}
      gridMargins={0}
      gridMaxWidth="none"
    >
      <Cell span={[0 ,0, 2]}>
        <SidebarStyled>
          <Sidebar />
        </SidebarStyled>
      </Cell>
      <Cell span={[4 ,8, 10]}>
        <ContentStyled>
          <Content />
        </ContentStyled>
      </Cell>  
    </Grid>
    <Footer />
    </React.Fragment>
  )
}

export default Main
