import React from 'react'
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { Paragraph1 } from "baseui/typography"
import { StyledLink } from "baseui/Link"

function Podcast() {
  return (
    <Block
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="75vh"
    >
      <Block marginTop="25px" marginLeft="15px">
        <Link to="/">
          <LogoHorizontal />
        </Link>
      </Block>
      <Block marginLeft="15px">
        <Paragraph1 marginBottom="scale500">
          <StyledLink target="_blank" href="/">Episodio 1 (Comienzos)</StyledLink>
        </Paragraph1>
        <Paragraph1 marginBottom="scale500">
          <StyledLink target="_blank" href="/">Episodio 2 (Segundos)</StyledLink>
        </Paragraph1>
        <Paragraph1 marginBottom="scale500">
          <StyledLink target="_blank" href="/">Episodio 3 (Terceros)</StyledLink>
        </Paragraph1>
        <Paragraph1 marginBottom="scale500">
          <StyledLink target="_blank" href="/">Episodio 4 (Fianles)</StyledLink>
        </Paragraph1>
      </Block>
    </Block>
  )
}

export default Podcast
