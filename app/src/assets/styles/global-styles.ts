import { createGlobalStyle } from 'styled-components';

import MontserratWoff from 'assets/fonts/Montserrat/Montserrat.woff';
import MontserratWoff2 from 'assets/fonts/Montserrat/Montserrat.woff2';

const globalStyles = () => {
  return createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body{
        overflow: hidden
      }

      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'),
        url(${MontserratWoff2}) format('woff2'),
        url(${MontserratWoff}) format('woff')
      }
    `;
};

export default globalStyles;
