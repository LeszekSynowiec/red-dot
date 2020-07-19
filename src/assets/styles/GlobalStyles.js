import { createGlobalStyle } from "styled-components"

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
    margin: 0;
    width: 100vw;
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

}
`

export default GlobalStyle
