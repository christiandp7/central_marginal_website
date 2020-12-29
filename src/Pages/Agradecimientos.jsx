import React from 'react'
import { useStyletron } from "baseui"
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { StyledLink } from "baseui/link"
import {Grid, Cell} from 'baseui/layout-grid';
import {Card, StyledThumbnail, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { Paragraph1, H4 } from "baseui/typography"
import Fade from 'react-reveal/Fade';

// Components
import Header from '../Components/Header/Header'
import PageContainer from '../Components/PageContainer'

// data
import agradecimientosNames from '../data/AgradecimientosNames'

function Agradecimientos() {
  const [css, theme] = useStyletron()
  return (
    <>
      <Header />

      <PageContainer>
        <Grid gridMargins={[16,36,0]}>
          <Cell span={12}>
            <Block
              marginTop="10vh"
            >
              <Fade>
                <H4 style={{lineHeight: 2.1, textAlign: 'justify', fontWeight: 200}}>
                {
                  agradecimientosNames.map((name, i) => (
                      <span className="agradecimientos_name">{name} </span>
                  ))
                }
                </H4>
              </Fade>
            </Block>
          </Cell>
        </Grid>
      </PageContainer>
    </>
  )
}

export default Agradecimientos
