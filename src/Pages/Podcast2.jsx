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
import podcastData from '../data/PodcastData'

function Podcast2() {
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
            podcastData.map((episode, i) => (
              <Cell span={[16, 4, 6]} key={i}>
                <Fade>
                  <Card
                    className="podcast_card"
                    overrides={{
                      Root: {style: {border: 0, color: "blue" }},
                      Body: {
                        style: ({ $theme }) => ({
                          //$theme.typography.ParagraphXSmall,
                          fontWeight: '300',
                          color: "blue"
                        })
                      }
                    }}
                    headerImage={episode.image}
                    //title={episode.title}
                  >
                    <StyledBody>
                      <Paragraph3 style={{fontWeight: 200}}>{episode.text}</Paragraph3>
                      {/*episode.text*/}
                    </StyledBody>
                    <StyledAction>
                      <Button $as="a" target="_blank" href={episode.link} overrides={{BaseButton: {style: {width: '100%'}}}}>
                        ir al Podcast
                      </Button>
                    </StyledAction>
                  </Card>
                </Fade>
              </Cell>
            ))
          }
        </Grid>
      </Block>
    </>
  )
}

export default Podcast2
