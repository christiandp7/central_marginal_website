import React from 'react'
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { Paragraph1 } from "baseui/typography"
import { StyledLink } from "baseui/Link"

function Participantes() {

  const namesStyle = {fontWeight:"500"};

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
        <Paragraph1 style={namesStyle} marginBottom="scale500">
          Theowaldo Palma
        </Paragraph1>
        <Paragraph1 style={namesStyle} marginBottom="scale500">
          Marianne Benoit Benzan
        </Paragraph1>
        <Paragraph1 style={namesStyle} marginBottom="scale500">
          Silvana Luna
        </Paragraph1>
        <Paragraph1 style={namesStyle} marginBottom="scale500">
          Celeste R.
        </Paragraph1>
      </Block>
    </Block>
  )
}

export default Participantes
