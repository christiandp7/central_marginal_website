import React from 'react'
import {useStyletron} from 'baseui';
import {styled} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';

import Sidebar from '../Components/Sidebar'
import Content from '../Components/Content'

const SidebarStyled = styled('div', ({$theme}) => ({
  //backgroundColor: "#f60",
}));

const ContentStyled = styled('div', ({$theme}) => ({
  //backgroundColor: $theme.colors.backgroundAccent,
}));

const Main = () => {
  const [css, theme] = useStyletron();
  
  return (
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
  )
}

export default Main
