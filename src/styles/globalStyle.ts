import { createGlobalStyle } from "styled-components";
import media from "./mediaQuery";

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
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
  }

  main {
    max-width: 1300px;
    margin: 0 auto;
  }

  body {
    line-height: 1.6;
    font-size: 20px;
  }

  h1 {
    font-size: 128px;
  }

  h2 {
    font-size: 96px;
  }

  h3 {
    font-size: 88px;
    margin: 0;
  }

  h4 {
    font-size: 48px;
  }

  h5 {
    font-size: 40px;
  }

  h6 {
    font-size: 32px;
    margin-top: 0;
  }

  ul {
    margin: 0;
  }

  /* モバイル版レイアウト */
  ${media.mobile`
    body {
      font-size: 16px;
    }

    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 48px;
    }

    h3, h4 {
      font-size: 32px;
    }

    h5, h6 {
      font-size: 20px;
    }

    main {
      max-width: 768px;
      padding: 0 15px;
    }
  `}
`;

export default GlobalStyle;
