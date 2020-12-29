import React from 'react'
import { Block } from "baseui/block";

function PageContainer({ children }) {
  return (
    <Block
      marginTop={["10px", "25px", "35px"]}
      marginBottom={["20px", "25px", "35px"]}
    >
      {children}
    </Block>
  )
}

export default PageContainer
