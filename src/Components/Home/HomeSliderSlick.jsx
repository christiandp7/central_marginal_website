import React, { useContext } from 'react'
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "baseui/icon";
import { SliderContext } from '../../Context/SliderContext'
import { useStyletron } from 'baseui'
import { Paragraph2 } from 'baseui/typography'

import {
  SlideImg1,
  SlideImg2,
  SlideImg3,
  SlideImg4,
  SlideImg5,
  SlideImg6,
  SlideImg7,
} from '../../data/HomeSlides'

const nextArrow = () => (<button type="button" className="slick-next">Nrxt</button>)

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  //accessibility: true,
  autoplay: true,
  //adaptativeHeight: true,
  //variableWidth: true,
  autoplaySpeed: 3000,
  //arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  className: "homeSlider",
  centerMode: true,
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};


function HomeSliderSlick() {
  let { setSlider1, slider2 } = useContext(SliderContext);
  let [ css, theme ] = useStyletron();

  const figStyles = css({margin:'0', outline: '0', width: 'auto'});
  const figCapStyles = css({marginTop: '5px'});
  const imgStyles = css({maxWidth: '100%', maxHeight: '50vh'});
  const sliderStyles = {maxWidth: '100%', margin: "0 25px"}

  return (
    <Slider {...settings} style={sliderStyles} ref={slider => setSlider1(slider)} asNavFor={slider2}>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg1} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg2} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg3} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg4} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg5} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg6} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src={SlideImg7} alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
    </Slider>
  );
}

export default HomeSliderSlick
