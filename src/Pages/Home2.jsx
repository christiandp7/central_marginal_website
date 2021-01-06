import React from 'react'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { NavLink as Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Scrollbar from 'react-custom-scrollbars'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Paragraph1 } from "baseui/typography"

// components
//import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'
//import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'

// assets
import homeImg from '../assets/images/home/home-image.jpg'
import homeImgThumb from '../assets/images/home/home-image_thumb.jpg'


function Home2() {
  return (
    <Block 
      display="flex"
      //flexWrap="wrap"
      justifyContent="flex-end"
      //justifyContent="center"
      //height="100vh"
      /*display="flex"
      justifyContent="flex-end"
      flexWrap="wrap"*/
    >
      <Block padding="0 15px" width="85%" display="flex" justifyContent="flex-end" alignItems="center">
        <Scrollbar 
          autoHide
          renderThumbVertical={({ style, ...props }) =>
            <div {...props} style={{ ...style, display: "none" }}/>
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
          <Paragraph1 className="home-text" $style={{fontWeight: 300}}>
            <span>Central Marginal</span> es un podcast sobre arte en el caribe conducido por la comunicadora dominicana Silvana Luna. El descubrimiento del archivo de arte del colectivo sincrético y los documentos de la <span>escuela flotante</span> forman la primera serie de episodios. A través de conversaciones con fuentes primarias y especialistas en el archivo imaginamos futuros posibles para la educación artística en Repúblia Dominicana y el Caribe. <span>Cental Marginal</span> es una coproducción con Suspicious Package.
          </Paragraph1>

          <Footer />

        </Scrollbar>       
      </Block>
      <Block 
        width="15%" 
        overflow="hidden" 
        maxHeight="100vh" 
        display="flex" 
        alignItems="center" 
        justifyContent="flex-end" 
        paddingRight={["0","5px","10px","20px"]}
      >
        <Link to="/">
          <Fade right>
            <LogoVertical />
          </Fade>
        </Link>
      </Block>


      {/*<Footer />*/}
    </Block>
  )
}

export default Home2
