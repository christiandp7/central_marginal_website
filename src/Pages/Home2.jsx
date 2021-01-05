import React from 'react'
import { Block } from 'baseui/block'
//import { useStyletron } from 'baseui'
import { NavLink as Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Scrollbar from 'react-custom-scrollbars'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Display4 } from "baseui/typography"

// components
import HomeSliderSlick from '../Components/Home/HomeSliderSlick'
import { LogoVertical } from '../Svg/Logo'
import Header from '../Components/Header/Header'
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
      <Block position="relative" width="85%" display="flex" justifyContent="flex-end" alignItems="center">
        <Scrollbar 
          //autoHideTimeout={3000} 
          //autoHeightMin="100vh"
          autoHide
          style={{ width: '100%', height: '100%', padding: "0 15px" }}
        >
          <LazyLoadImage 
            wrapperClassName="home-banner__wrapper"
            src={homeImg}
            alt="home"
            effect="blur"
            placeholderSrc={homeImgThumb}
          />
          <Display4 paddingTop="30px" paddingBottom="30px" $style={{fontWeight: 300, textTransform: "uppercase", textAlign: "justify"}}>
            <Display4 as="span" $style={{fontWeight: 400}}>Central Marginal</Display4> es un podcast sobre arte en el caribe conducido por la comunicadora dominicana Silvana Luna. El descubrimiento del archivo de arte del colectivo sincrético y los documentos de la <Display4 as="span" $style={{fontWeight: 400}}>escuela flotante</Display4> forman la primera serie de episodios. A través de conversaciones con fuentes primarias y especialistas en el archivo imaginamos futuros posibles para la educación artística en Repúblia Dominicana y el Caribe. <Display4 as="span" $style={{fontWeight: 400}}>Cental Marginal</Display4> es una coproducción con Suspicious Package.
          </Display4>

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
