import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
    outline: 0;
 }

 :root {
     --pink-primary: #FF577F;
     --pink-focus: #FF427F;
     --pink-negative: #59323F;
     --grey-0: #F8F9FA;
     --grey-1: #868E96;
     --grey-2: #343B41;
     --grey-3: #212529;
     --grey-4: #121214;
     --sucess: #3FE864;
     --negative: #E83F5B;
     --background: #000000;
 }

 body{
     background-color: var(--background);
     color: var(--grey-0);
 }
 
 body, input, button {
     font-family: 'Roboto Mono', monospace;
     /* 1rem vale 16 pixels */
     font-size: 1rem; 
 }
 h1, h2, h3, h4, h5, h6 {
     font-family: 'Roboto Mono', monospace;
     font-weight: 700;
 }
 button {
     cursor: pointer;
 }
 a {
     text-decoration: none;
 }
  li {
    list-style: none;
  }

`;
