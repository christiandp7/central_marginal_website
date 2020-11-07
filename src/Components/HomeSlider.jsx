import React, { useEffect } from 'react'
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

const glideOptions = {
  type: 'slider',
  startAt: 0
}

function HomeSlider() {

  useEffect(() => {
    const glide = new Glide(glideOptions);
    glide.mount({ Controls, Breacpoints})
    return () => {
      glide.destroy();
    }
  })

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">0</li>
          <li className="glide__slide">1</li>
          <li className="glide__slide">2</li>
        </ul>
      </div>
    </div>
  )
}

export default HomeSlider
