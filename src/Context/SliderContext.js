import userEvent from '@testing-library/user-event';
import React, { createContext,  } from 'react'

let SliderContext = createContext();
let { Provider, Consumer } = SliderContext;

function SliderProvider({ children }) {
  return (
    <Provider value={}>
      {children}
    </Provider>
  )
}

export { SliderProvider, Consumer as SliderConsumer, SliderContext }
