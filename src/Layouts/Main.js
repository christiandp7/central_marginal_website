import React from 'react'
import {useStyletron} from 'baseui';
import {styled} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';

import Sidebar from '../Components/Sidebar'

const SidebarStyled = styled('div', ({$theme}) => ({
  backgroundColor: "#f60",
}));

const ContentStyled = styled('div', ({$theme}) => ({
  backgroundColor: $theme.colors.backgroundAccent,
}));

const Main = () => {
  const [css, theme] = useStyletron();
  
  return (
    <Grid
      //gridColumns={}
      gridGaps={0}
      gridGutters={0}
      gridMargins={0}
      //gridMaxWidth={}
    >
      <Cell span={[2]}>
        <SidebarStyled>
          <Sidebar />
        </SidebarStyled>
      </Cell>
      <Cell span={[10]}>
        <ContentStyled>
          <h2>Main Content</h2>
        </ContentStyled>
      </Cell>  
    </Grid>
  )
}

export default Main
