import React from 'react'
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "baseui/icon";


const nextArrow = () => (<button type="button" className="slick-next">Nrxt</button>)

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "homeSlider"
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};


function HomeSliderSlick() {


  return (
    <Slider {...settings}>
      <div>
        <img src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/1000/400" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/1000/400" alt="" />
      </div>
    </Slider>
  );
}

export default HomeSliderSlick
