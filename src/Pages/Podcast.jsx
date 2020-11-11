import React from 'react'
import { Block } from 'baseui/block'
import { Link } from 'react-router-dom'
import { LogoHorizontal } from '../Svg/Logo'
import { Paragraph1 } from "baseui/typography"

function Podcast() {
  return (
    <Block>
      <Block marginTop="25px" marginLeft="15px">
        <Link to="/">
          <LogoHorizontal />
        </Link>
      </Block>
      <Block marginLeft="15px">
        <Paragraph1 marginBottom="scale500"><a>Episodio 1 (Comienzos)</a></Paragraph1>
        <Paragraph1 marginBottom="scale500"><a>Episodio 2 (Segundos)</a></Paragraph1>
        <Paragraph1 marginBottom="scale500"><a>Episodio 3 (Terceros)</a></Paragraph1>
        <Paragraph1 marginBottom="scale500"><a>Episodio 4 (Fianles)</a></Paragraph1>
      </Block>
    </Block>
  )
}

export default Podcast
