import React, {useState} from 'react'
import { Block } from "baseui/block";
import { Grid, Cell } from "baseui/layout-grid";
import {Drawer, ANCHOR, SIZE} from 'baseui/drawer'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { H3, Paragraph1 } from "baseui/typography"
import {Spinner} from 'baseui/spinner';

function ImageDrawer({ isOpen, setIsOpen, image}) {
  const [loader, setLoader] = useState(true)
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
                //beforeLoad={() => setLoader(true)}
                afterLoad={() => setLoader(false)}
                style={{maxHeight: "90vh"}}
                src={image.srcBig}
                alt={image.title}
                effect="blur"
                //placeholder={<h1>Loading...</h1>}
                placeholderSrc={image.src}
              />
            </Block>
            
          </Cell>
          <Cell span={[4,3,3]}>
            <Block className="archivo_drawer__text">
              <H3>{image.title}</H3>
              <Paragraph1>{image.caption}</Paragraph1>
            </Block>
          </Cell>
        </Grid>
      </Block>
    </Drawer>
  )
}

/*const ImgLoader = () => (
    <Spinner
        overrides={{
          ActivePath: {
            style: ({$theme}) => ({fill: $theme.colors.primaryA}),
          },
        }}
      />
)*/


/*class ImgLoader extends React.Component {
  render() {
    return (
      <Spinner
        overrides={{
          ActivePath: {
            style: ({$theme}) => ({fill: $theme.colors.primaryA}),
          },
        }}
      />
    )
  }
}*/


export default ImageDrawer
