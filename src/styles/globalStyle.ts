import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "Noto Sans", sans-serif;
    color: #0E0E0E;
    background-color: #ffffff;
    user-select: none;
  }

  #root {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  main {
    max-width: 1300px;
    margin: 0 auto;
  }

  body {
    line-height: 1.8;
    font-size: 20px;
  }

  h2, h3 {
    font-size: 32px;
    margin-bottom: 80px;
  }

  h4 {
    font-size: 24px;
    font-weight: 100;
    margin: 0;
  }

  ul {
    margin: 0;
  }
`;

export default GlobalStyle;
