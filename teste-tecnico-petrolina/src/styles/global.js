import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --preto: #323240;
    --cinza: #636573;
    --roxo: #BFA7F2;
    --verde-escuro: #67733D;
    --verde-claro:#DCF235;
    --branco: #ffff;
  }

  body {
    background: var(--preto);
    color: var(--branco);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'PT Serif', serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono';
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;
