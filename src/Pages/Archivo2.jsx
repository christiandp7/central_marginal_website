import React from 'react'
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { Paragraph1 } from "baseui/typography"
import { StyledLink } from "baseui/link"
import {Grid, Cell} from 'baseui/layout-grid';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { Paragraph3 } from "baseui/typography"
import Fade from 'react-reveal/Fade';

// data
import archivoImages from '../data/ArchivoImages'

function Archivo2() {
  return (
    <>
      <Block paddingTop="25px" padding="0 15px">
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
          {
            archivoImages.map((image, i) => (
              <Cell span={image.col}>
                <Block 
                  display="flex" 
                  justifyContent="center" 
                  alignItems="center" 
                  height="100%"
                  marginTop="25px"
                  marginBottom="25px"
                >
                  <Fade>
                    <img 
                      style={{maxWidth: '100%'}} 
                      src={image.src} 
                      alt={image.alt}
                      //onLoad={}
                    />
                  </Fade>
                </Block>
              </Cell>
            ))
          }
        </Grid>
      </Block>
    </>
  )
}

export default Archivo2
