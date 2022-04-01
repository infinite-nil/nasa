import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }
  
  body {
    color: ${({ theme }) => theme.colors.text};
    font-family: sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  input {
    font: inherit;
  }

  p, h1 {
    overflow-wrap: break-word;
  }

  #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
