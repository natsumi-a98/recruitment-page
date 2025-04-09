import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0 auto;
    padding: 0;
    background-color: #003366;
    font-family: "Noto Sans", sans-serif;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    height: 100%;
    width: 100%;
    max-width: 1300px;
    margin: 0;
    line-height: 1.8;
    font-size: 20px;
  }
`;

export default GlobalStyle;
