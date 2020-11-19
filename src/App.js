import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { SliderProvider } from './Context/SliderContext'
import { BrowserRouter as Router } from "react-router-dom"

import './assets/scss/index.scss'
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Main from './Layouts/Main';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SliderProvider>
          <Router>
            <Main />
          </Router>
        </SliderProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
