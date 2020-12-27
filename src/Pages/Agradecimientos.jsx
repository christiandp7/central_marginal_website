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

// data
import agradecimientosNames from '../data/AgradecimientosNames'

function Agradecimientos() {
  const [css, theme] = useStyletron()
  return (
    <>
      <Block paddingTop="25px" paddingLeft="15px" paddingRight="15px">
        <Link to="/">
          <Fade top>
            <LogoHorizontal />
          </Fade>
        </Link>
      </Block>
      <Block
        marginTop={["20px", "25px", "35px"]}
        marginBottom={["20px", "25px", "35px"]}
      >
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
      </Block>
    </>
  )
}

export default Agradecimientos
