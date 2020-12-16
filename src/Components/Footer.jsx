import React from 'react'
import { Block } from 'baseui/block'
import { Paragraph3 } from 'baseui/typography'

function Footer({ position="static"}) {

  return (
    <Block 
      position={position}
      bottom="0"
      width="100%"
      paddingBottom="16px"
    >
      <Paragraph3 $style={{textAlign:"center"}}><small>Copyright &copy; Central Marginal. Powered by Suspicious Package.</small></Paragraph3>
    </Block>
  )
}

export default Footer
