import React, { useContext } from 'react'
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "baseui/icon";
import { SliderContext } from '../Context/SliderContext'
import { useStyletron } from 'baseui'
import { Paragraph2 } from 'baseui/typography'

const nextArrow = () => (<button type="button" className="slick-next">Nrxt</button>)


const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "homeSlider"
  //nextArrow: '<button type="button" className="slick-next">Nrxt</button>'
};


function HomeSliderSlick() {
  let { setSlider1, slider2 } = useContext(SliderContext);
  let [ css, theme ] = useStyletron();

  const figStyles = css({margin:'0', outline: '0'});
  const figCapStyles = css({marginTop: '5px'});

  return (
    <Slider {...settings} ref={slider => setSlider1(slider)} asNavFor={slider2}>
      <figure className={figStyles}>
        <img src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img src="https://picsum.photos/1000/400" alt="Trulli"  />
        <figcaption className={figCapStyles}>
          <Paragraph2>Fig.1 - Trulli, Puglia, Italy.</Paragraph2>
        </figcaption>
      </figure>
      <figure className={figStyles}>
        <img src="https://picsum.photos/1000/400" alt="Trulli"  />
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
