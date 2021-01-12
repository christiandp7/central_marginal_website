import React, { useState } from "react";
//import { Block } from "baseui/block";
//import { Link } from "react-router-dom";
//import { LogoHorizontal } from "../Svg/Logo";
//import { Paragraph1 } from "baseui/typography";
//import { StyledLink } from "baseui/link";
import { Grid } from "baseui/layout-grid";
//import { Card, StyledBody, StyledAction } from "baseui/card";
//import { Button } from "baseui/button";
//import { Paragraph3 } from "baseui/typography";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "react-masonry-css"

// Components
import Header from "../Components/Header/Header";
import PageContainer from "../Components/PageContainer";
import ImageDrawer from "../Components/Archivo/ImageDrawer";
import Footer from '../Components/Footer'

// data
import archivoImages from "../data/ArchivoImages";

const breakpointsCols = {
  default: 4,
  1135: 3,
  600: 2,
  400: 1
};

function Archivo3() {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState({})

  const handleDrawer = (image) => {
    setCurrentImg(image);
    setDrawerOpen(true);
  }

  return (
    <>
      <Header />

      <PageContainer>
        <Grid gridMargins={[16, 36, 0]}>
          <Masonry
            breakpointCols={breakpointsCols}
            className="archivo-masonry"
            columnClassName="archivo-masonry__column">
            {archivoImages.map((image, i) => (
              <Fade>
                <LazyLoadImage
                  src={image.src}
                  alt={image.alt}
                  effect="opacity"
                  threshold={20}
                  onClick={() => handleDrawer(image)}
                />
              </Fade>
            ))}
          </Masonry>
        </Grid>

        <ImageDrawer
          isOpen={drawerOpen}
          setIsOpen={setDrawerOpen}
          image={currentImg}
        />



        {/*<Grid gridMargins={[16, 36, 0]}>
          {archivoImages.map((image, i) => (
            <Cell span={image.col} key={i}>
              <Block
                display="flex"
                justifyContent={image.justifyContent || "center"}
                alignItems="center"
                height="100%"
                marginTop="25px"
                marginBottom="25px"
              >
                <Fade>
                  <LazyLoadImage
                    //style={{maxWidth: '100%'}}
                    src={image.src}
                    alt={image.alt}
                    effect="opacity"
                    //useIntersectionObserver={true}
                    threshold={20}
                    //onLoad={}
                  />
                </Fade>
              </Block>
            </Cell>
          ))}
          </Grid>*/}
      </PageContainer>
      <Footer />
    </>
  );
}

export default Archivo3;
