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
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Components
import Header from '../Components/Header/Header'
import PageContainer from '../Components/PageContainer'

// data
import archivoImages from '../data/ArchivoImages'

function Archivo2() {
  return (
    <>
      <Header />

      <PageContainer>
        <Grid gridMargins={[16,36,0]}>
          {
            archivoImages.map((image, i) => (
              <Cell span={image.col} key={i}>
                <Block 
                  display="flex" 
                  justifyContent={image.justifyContent || "center"} 
                  alignItems="center" 
                  height="100%"
                  marginTop="25px"
                  marginBottom="25px"
                >
                  <Fade>
                    <LazyLoadImage 
                      //style={{maxWidth: '100%'}} 
                      src={image.src} 
                      alt={image.alt}
                      effect="opacity"
                      //useIntersectionObserver={true}
                      threshold={20}
                      //onLoad={}
                    />
                  </Fade>
                </Block>
              </Cell>
            ))
          }
        </Grid>
      </PageContainer>
    </>
  )
}

export default Archivo2
