import React, { useContext } from 'react'
import Slider from "react-slick";
import { SliderContext } from '../../Context/SliderContext'
import { useStyletron } from 'baseui'
import { Paragraph2 } from 'baseui/typography'
import { PrevArrow, NextArrow } from '../Arrows/Arrows'

import homeSlidesData from '../../data/HomeSlides'


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  className: "homeSlider",
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  //centerMode: true,
  //centerPadding: 0,
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};


function HomeSliderSlick() {
  let { setSlider1, slider2 } = useContext(SliderContext);
  let [ css, theme ] = useStyletron();

  const figStyles = css({margin:'0', outline: '0', width: 'auto'});
  const figCapStyles = css({marginTop: '5px'});
  const imgStyles = css({width: '100%', maxWidth: '100%' });
  const sliderStyles = {maxWidth: '100%', margin: "0 25px"}

  return (
    <Slider {...settings} style={sliderStyles} ref={slider => setSlider1(slider)} asNavFor={slider2}>
      {
        homeSlidesData.map((slide, i) => {
          return (
          <figure className={figStyles} key={i}>
            <img className={imgStyles} src={slide.img} alt={slide.caption}  />
            <figcaption className={figCapStyles}>
              <Paragraph2>{slide.caption}</Paragraph2>
            </figcaption>
          </figure>
          )
        })
      }
    </Slider>
  );
}

export default HomeSliderSlick
