import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    overflow: auto;
    padding: 0;
  }
`;

export default GlobalStyles;
