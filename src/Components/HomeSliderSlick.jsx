import React from 'react'
import Slider from "react-slick";
 

function HomeSliderSlick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://picsum.photos/800/600" alt=""/>
      </div>
      <div>
        <img src="https://picsum.photos/800/600" alt=""/>
      </div>
      <div>
        <img src="https://picsum.photos/800/600" alt=""/>
      </div>
      <div>
        <img src="https://picsum.photos/800/600" alt=""/>
      </div>
      <div>
        <img src="https://picsum.photos/800/600" alt=""/>
      </div>
      <div>
        <img src="https://picsum.photos/800/600" alt=""/>
      </div>
    </Slider>
  );
}

export default HomeSliderSlick
