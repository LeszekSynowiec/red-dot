import { createGlobalStyle } from "styled-components"

import img from '../images/35114123_1018408368312691_1864817775642411008_o.svg'

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

body{
    color: #707070;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 85%
    ),
    url(${img});
  background-position: left;
  background-size: 25%;
  background-repeat: repeat-y;
    margin: 0;
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat';
    font-style: 'regular'
    h1, p{
        margin: 0;
    }
    h1{ 
        font-size: 45px;
        font-weight: 400;
        text-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }

    a{  
        font-size: 25px;
        text-decoration: none;
        color: #707070;
    }

    &:-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #707070;
  }

}
`

export default GlobalStyle
