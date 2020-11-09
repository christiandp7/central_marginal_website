import React from 'react'
import Slider from "react-slick";
import { useStyletron } from 'styletron-react';


const settings = {
  dots: false,
  infinite: true,
  //adaptiveHeight: true,
  //variableWidth: true,
  //speed: 500,
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: true,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true,
  className: "sideSlider",
  autoplay: true,
  autoplaySpeed: 3000,
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};

function SideSlider() {
  const [css, theme] = useStyletron();
  return (
    <Slider {...settings}>
      <div>
        <img className={css({width: '100%'})} src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img className={css({width: '100%'})} src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img className={css({width: '100%'})} src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img className={css({width: '100%'})} src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img className={css({width: '100%'})} src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img className={css({width: '100%'})} src="https://picsum.photos/1000/400" alt="" />
      </div>
    </Slider>
  )
}

export default SideSlider
