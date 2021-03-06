import React from 'react'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { NavLink as Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { Grid, Cell } from 'baseui/layout-grid';
import Scrollbar from 'react-custom-scrollbars'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Paragraph1 } from "baseui/typography"

// components
//import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import PageContainer from '../Components/PageContainer'

// assets
import homeImg from '../assets/images/home/home-image.jpg'
import homeImgThumb from '../assets/images/home/home-image_thumb.jpg'


function Home2() {
  return (
    <>
      <Header onlyMobile />
      <Block
        display="flex"
        height={["auto", "auto", "auto", "100hv"]}
      >
        <Block
          padding="0 15px"
          width="100%"
        /*display="flex"
        justifyContent="flex-end"
        alignItems="center"*/
        >
          <Scrollbar
            autoHide
            autoHeight
            autoHeightMin="100%"
            autoHeightMax="100%"
            renderThumbVertical={({ style, ...props }) =>
              <div {...props} style={{ ...style, display: "none" }} />
            }
            style={{ width: '100%', height: '100%' }}
          >
            <LazyLoadImage
              wrapperClassName="home-banner__wrapper"
              src={homeImg}
              alt="home"
              effect="blur"
              placeholderSrc={homeImgThumb}
            />
            <Paragraph1 className="home-text" $style={{ fontWeight: 300 }}>
              <span>Central Marginal</span> es un podcast sobre arte en el caribe conducido por la comunicadora dominicana Silvana Luna. El descubrimiento del archivo de arte del <span>colectivo sincrético</span> y los documentos de la <span>escuela flotante</span> forman la primera serie de episodios. A través de conversaciones con fuentes primarias y especialistas en el archivo, imaginamos futuros posibles para la educación artística en Repúblia Dominicana y el Caribe. <span>Central Marginal</span> es una coproducción con Suspicious Package.
          </Paragraph1>

            <Footer />

          </Scrollbar>
        </Block>

        <Block
          paddingLeft="5px"
          paddingRight="20px"
          maxWidth="15%"
          //position="fixed"
          display={["none", "none", "none", "block"]}
        >
          <Link to="/">
            <Fade right>
              <LogoVertical />
            </Fade>
          </Link>
        </Block>
      </Block>
      {/*<Block
        display="flex"
        //flexWrap="wrap"
        justifyContent="flex-end"
      //justifyContent="center"
      //height="100vh"
      >
        <Block
          padding="0 15px"
          //width="85%" 
          width="100%"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Scrollbar
            autoHide
            renderThumbVertical={({ style, ...props }) =>
              <div {...props} style={{ ...style, display: "none" }} />
            }
            style={{ width: '100%', height: '100%' }}
          >
            <LazyLoadImage
              wrapperClassName="home-banner__wrapper"
              src={homeImg}
              alt="home"
              effect="blur"
              placeholderSrc={homeImgThumb}
            />
            <Paragraph1 className="home-text" $style={{ fontWeight: 300 }}>
              <span>Central Marginal</span> es un podcast sobre arte en el caribe conducido por la comunicadora dominicana Silvana Luna. El descubrimiento del archivo de arte del <span>colectivo sincrético</span> y los documentos de la <span>escuela flotante</span> forman la primera serie de episodios. A través de conversaciones con fuentes primarias y especialistas en el archivo, imaginamos futuros posibles para la educación artística en Repúblia Dominicana y el Caribe. <span>Central Marginal</span> es una coproducción con Suspicious Package.
          </Paragraph1>

            <Footer />

          </Scrollbar>
        </Block>

        <Block
          paddingLeft="5px"
          paddingRight="20px"
          //maxWidth="15%"
          display={["none", "none", "block"]}
        >
          <Link to="/">
            <Fade right>
              <LogoVertical />
            </Fade>
          </Link>
          </Block>*/}


      {/*<Block
        width="15%"
        overflow="hidden"
        maxHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        paddingRight={["0", "5px", "10px", "20px"]}
      >
        <Link to="/">
          <Fade right>
            <LogoVertical />
          </Fade>
        </Link>
      </Block>*/}


      {/*<Footer />*/}
    </>
  )
}

export default Home2
