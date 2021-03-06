import React from 'react'
import { Block } from "baseui/block";

function PageContainer({ children }) {
  return (
    <Block
      marginTop={["10px", "25px", "35px"]}
      marginBottom={["15px", "25px", "35px"]}
      minHeight="60vh"
    >
      {children}
    </Block>
  )
}

export default PageContainer
