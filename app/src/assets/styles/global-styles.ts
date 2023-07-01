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

      @keyframes typing-circle7124 {
        0% {
          top: 20px;
          height: 5px;
          border-radius: 50px 50px 25px 25px;
          transform: scaleX(1.7);
        }
        40% {
          height: 8px;
          border-radius: 50%;
          transform: scaleX(1);
        }
        100% {
          top: 0%;
        }
      }

      @keyframes typing-shadow046 {
        0% {
          transform: scaleX(1.5);
        }
        40% {
          transform: scaleX(1);
          opacity: 0.7;
        }
        100% {
          transform: scaleX(0.2);
          opacity: 0.4;
        }
      }
    `;
};

export default globalStyles;
