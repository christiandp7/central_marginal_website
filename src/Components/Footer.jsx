import React from 'react'
import { Block } from 'baseui/block'
import { Paragraph3 } from 'baseui/typography'

function Footer() {
  return (
    <Block 
      position="absolute"
      bottom="0"
      width="100%"
      paddingBottom="16px"
    >
      <Paragraph3 $style={{textAlign:"center"}}>Copyright &copy; Central Marginal. Powered by Suspicious Package.</Paragraph3>
    </Block>
  )
}

export default Footer
