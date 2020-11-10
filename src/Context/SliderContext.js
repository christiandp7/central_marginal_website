import userEvent from '@testing-library/user-event';
import React, { createContext, useState } from 'react'

let SliderContext = createContext();
let { Provider, Consumer } = SliderContext;

function SliderProvider({ children }) {
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)
  return (
    <Provider value={{slider1, setSlider1, slider2, setSlider2}}>
      {children}
    </Provider>
  )
}

export { SliderProvider, Consumer as SliderConsumer, SliderContext }
