import React from 'react'
import { Block } from "baseui/block";
import { Grid, Cell } from "baseui/layout-grid";
import {Drawer, ANCHOR, SIZE} from 'baseui/drawer'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Paragraph1 } from "baseui/typography"
import {Spinner} from 'baseui/spinner';

function ImageDrawer({ isOpen, setIsOpen, image}) {
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => setIsOpen(false)}
      anchor={ANCHOR.top}
      size={SIZE.full}
    >
      <Block className="archivo_drawer_content">
        <Grid>
          <Cell span={[4,5,9]}>
            <Block
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <LazyLoadImage 
                style={{maxHeight: "90vh"}}
                src={image.srcBig}
                alt={image.alt}
                effect="opacity"
                placeholder={imgLoader()}
              />
            </Block>
            
          </Cell>
          <Cell span={[4,3,3]}>
            <Paragraph1>{image.caption}</Paragraph1>
          </Cell>
        </Grid>
      </Block>
    </Drawer>
  )
}

const imgLoader = () => (
  <Spinner />
)

export default ImageDrawer
