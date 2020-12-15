import React from 'react'
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { Paragraph1 } from "baseui/typography"
import { StyledLink } from "baseui/link"
import {Grid, Cell} from 'baseui/layout-grid';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import Fade from 'react-reveal/Fade';

// data
import podcastData from '../data/PodcastData'

function Podcast2() {
  return (
    <>
      <Block marginTop="25px" marginLeft="15px">
        <Link to="/">
          <Fade top>
            <LogoHorizontal />
          </Fade>
        </Link>
      </Block>
      <Block margin="35px 0">
        <Grid>
          {
            podcastData.map((episode, i) => (
              <Cell span={[4, 4, 6]} >
                <Block 
                  marginBottom="25px"
                >
                  <Card
                    overrides={{Root: {style: {maxWidth: '400px', margin: '0 auto', marginBottom: '20px'}}}}
                    headerImage={episode.image}
                    title={episode.title}
                  >
                    <StyledBody>
                      {episode.text}
                    </StyledBody>
                    <StyledAction>
                      <Button target="_blank" href={episode.link} overrides={{BaseButton: {style: {width: '100%'}}}}>
                        ir al Podcast
                      </Button>
                    </StyledAction>
                  </Card>
                </Block>
              </Cell>
            ))
          }
        </Grid>
      </Block>
    </>
  )
}

export default Podcast2
