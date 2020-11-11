import React, { useContext } from 'react'
import Slider from "react-slick";
import { SliderContext } from '../../Context/SliderContext'
import { useStyletron } from 'styletron-react';


const settings = {
  dots: false,
  infinite: true,
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: true,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true,
  arrows: false,
  className: "sideSlider",
  //asNavFor: 
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};

function SideSlider() {
  let { setSlider2, slider1 } = useContext(SliderContext);
  const [css, theme] = useStyletron();

  const figStyles = css({margin:'0', outline: '0'});
  const imgStyles = css({ maxWidth: '100%'})
  return (
    <Slider {...settings} ref={slider => setSlider2(slider)} asNavFor={slider1}>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/500" alt="" />
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/500" alt="" />
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/500" alt="" />
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/500" alt="" />
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/500" alt="" />
      </figure>
    </Slider>
  )
}

export default SideSlider
