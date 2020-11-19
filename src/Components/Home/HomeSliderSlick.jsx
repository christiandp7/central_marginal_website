import React, { useContext } from 'react'
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "baseui/icon";
import { SliderContext } from '../../Context/SliderContext'
import { useStyletron } from 'baseui'
import { Paragraph2 } from 'baseui/typography'

const nextArrow = () => (<button type="button" className="slick-next">Nrxt</button>)


const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  //accessibility: true,
  autoplay: true,
  adaptativeHeight: true,
  autoplaySpeed: 3000,
  //arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  className: "homeSlider",
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};


function HomeSliderSlick() {
  let { setSlider1, slider2 } = useContext(SliderContext);
  let [ css, theme ] = useStyletron();

  const figStyles = css({margin:'0', outline: '0', width: 'auto'});
  const figCapStyles = css({marginTop: '5px'});
  const imgStyles = css({width: '100%', maxWidth: '100%'});
  const sliderStyles = {maxWidth: '100%', margin: "0 25px"}

  return (
    <Slider {...settings} style={sliderStyles} ref={slider => setSlider1(slider)} asNavFor={slider2}>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img className={imgStyles} src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      {/*<div>
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
      </div>*/}
    </Slider>
  );
}

export default HomeSliderSlick
