import React from 'react'
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { StyledLink } from "baseui/link"
import {Grid, Cell} from 'baseui/layout-grid';
import {Card, StyledThumbnail, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { Paragraph2, Display4 } from "baseui/typography"
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
              <Cell span={[16, 8, 12]} >
                <Fade>
                  {/*<Card
                    className="podcast_card-horizontal"
                    overrides={{
                      Root: {style: {border: 0, color: "blue" }},
                      Body: {style: {fontWeight: '300'}}
                    }}
                    //headerImage={episode.image}
                    //title={episode.title}
                  >
                    <StyledThumbnail
                      src={episode.image}
                    />
                    <StyledBody>
                      <Paragraph3 style={{fontWeight: 200}}>{episode.text}</Paragraph3>
                    </StyledBody>
                    <StyledAction>
                      <Button $as="a" target="_blank" href={episode.link} overrides={{BaseButton: {style: {width: '100%'}}}}>
                        Ir al podcast
                      </Button>
                    </StyledAction>
                  </Card>*/}
                  <Block
                    marginBottom="30px"
                    marginBottom="50px"
                  >
                    <Block
                      display="flex"
                    >
                      <Block flex={1}>
                        <img src={episode.image} alt=""/>
                      </Block>
                      <Block
                        display="flex"
                        alignItems="flex-end"
                        flex={2}
                      >
                        <Card
                          overrides={{
                            Root: {style: {border: 0}},
                            //Body: {style: {marginBottom: 0}},
                          }}
                        >
                          <StyledBody>
                            <Paragraph2 style={{fontWeight: 200}}>{episode.text}</Paragraph2>
                          </StyledBody>
                        </Card>
                      </Block>
                    </Block>
                    {/*<Display4 marginBottom="scale500">Episodio {i+1} - {episode.title}</Display4>*/}
                  </Block>

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
