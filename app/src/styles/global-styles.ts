import { createGlobalStyle } from 'styled-components';

import MontserratWoff from '../fonts/Montserrat/Montserrat.woff';
import MontserratWoff2 from '../fonts/Montserrat/Montserrat.woff2';

const globalStyles = () => {
  return createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      @font-face {
          font-family: 'Montserrat';
          src: local('Montserrat'),
          url(${MontserratWoff2}) format('woff2'),
          url(${MontserratWoff}) format('woff')
      }

    `;
};

export default globalStyles

