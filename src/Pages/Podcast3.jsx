import React from 'react'
import { Block } from 'baseui/block'
//import { Link } from 'react-router-dom'
//import { LogoHorizontal } from '../Svg/Logo'
//import { StyledLink } from "baseui/link"
import { Grid, Cell } from 'baseui/layout-grid';
import { Card, StyledBody } from 'baseui/card';
//import {Button} from 'baseui/button';
import { Paragraph2 } from "baseui/typography"
import Fade from 'react-reveal/Fade';

// Components
import Header from '../Components/Header/Header'
import PageContainer from '../Components/PageContainer'
import Footer from '../Components/Footer'

// data
import podcastData from '../data/PodcastData'

function Podcast2() {
  return (
    <>
      <Header />

      <PageContainer>
        <Grid gridMargins={[16, 36, 0]}>
          {
            podcastData.map((episode, i) => (
              <Cell span={[16, 8, 12]} >
                <Fade>
                  <Block
                    //marginBottom="30px"
                    marginBottom="50px"
                  >
                    <Grid
                      gridMargins={0}
                    >
                      <Cell span={[4, 3, 4]}>
                        {episode.podcast !== null ?
                          episode.podcast :
                          (
                            <a target="_blank" rel="noreferrer" href={episode.link}>
                              <img src={episode.image} alt="" />
                            </a>
                          )
                        }

                      </Cell>
                      <Cell span={[4, 5, 8]}>
                        <Block display="flex" alignItems="flex-end" height="100%">
                          <Card
                            overrides={{
                              Root: { style: { border: 0 } },
                              //Body: {style: {marginBottom: 0}},
                            }}
                          >
                            <StyledBody>
                              <Paragraph2 style={{ fontWeight: 200 }}>{episode.text}</Paragraph2>
                            </StyledBody>
                          </Card>
                        </Block>
                      </Cell>
                    </Grid>
                    {/*<Display4 marginBottom="scale500">Episodio {i+1} - {episode.title}</Display4>*/}
                  </Block>

                </Fade>
              </Cell>
            ))
          }
        </Grid>
      </PageContainer>

      <Footer />
    </>
  )
}

export default Podcast2
