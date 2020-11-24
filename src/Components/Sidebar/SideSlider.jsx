import React, { useContext } from 'react'
import Slider from "react-slick";
import { SliderContext } from '../../Context/SliderContext'
import { useStyletron } from 'styletron-react';
import { NextArrowDown } from '../Arrows/Arrows'

import homeSlidesData from '../../data/HomeSlides'

const settings = {
  dots: false,
  infinite: true,
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: true,
  verticalSwiping: true,
  swipeToSlide: true,
  //arrows: false,
  className: "sideSlider",
  focusOnSelect: true,
  nextArrow: <NextArrowDown />
  //pauseOnHover: true,
  //adaptiveHeight: true,
  //variableWidth: true,
};

function SideSlider() {
  let { setSlider2, slider1 } = useContext(SliderContext);
  const [css, theme] = useStyletron();

  const figStyles = css({marginLeft: 0, MarginRight: 0, outline: '0'});
  const imgStyles = css({ maxWidth: '100%'})

  return (
    <Slider {...settings} ref={slider => setSlider2(slider)} asNavFor={slider1}>
      {
        homeSlidesData.map((slide,i) => {
          return (
            <figure className={figStyles} key={i}>
              <img className={imgStyles} src={slide.img} alt={slide.caption} />
            </figure>
          )
        })
      }
      
    </Slider>
  )
}

export default SideSlider
