import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  @font-face {
    font-family: 'Mona Sans';
    src:
      url('./font/MonaSans-Regular.woff2') format('woff2 supports variations');
    font-weight: 200 900;
    font-stretch: 75% 125%;
  }


  html {
    font-family: "Mona Sans", "Arial", sans-serif;
    line-height: 1.5;
  }

`;

export default GlobalStyles;
