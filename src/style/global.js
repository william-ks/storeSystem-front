import { createGlobalStyle } from "styled-components";
import { shade, lighten, darken } from "polished";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    border: 0;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    font-family: ${(p) => p.theme.fonts.poppins};
    
  }

  html, body{
    height: 100%,
  }

  body{
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  main{
    width: 100%;
    min-height: 100vh;
    padding-left: 45px;
  }

  button{
    all: unset;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    font-family: ${(p) => p.theme.fonts.roboto};
    font-weight: 300;
    font-size: 1rem;

    margin: 10px;
    padding: 7px 35px;
    border-radius: 100px; 
    color: ${(p) => p.theme.colors.button.text};
    background: ${(p) => p.theme.colors.button.background};
    border: 1px solid ${(p) => lighten(0.15, p.theme.colors.button.background)};
    box-shadow: 0 5px 10px ${(p) => shade(0.25, p.theme.colors.shadow)};
  }
  
  button:hover{
    position: relative;
    transform: scale(1.04);
    box-shadow: 0 5px 10px ${(p) => shade(0.15, p.theme.colors.shadow)};
  }

  button:active{
    transform: scale(1);
    box-shadow: 0 5px 10px ${(p) => shade(0.25, p.theme.colors.shadow)};
  }

  input, select, textarea{
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    margin-top: 2px; 
    border-radius: 8px;
    font-size: 0.9rem;
    
    color: ${(p) => p.theme.colors.text.secondary};
    font-family: ${(p) => p.theme.fonts.roboto};
    font-weight: 300;
    
    background: ${(p) => darken(0.05, p.theme.colors.background)};
    border: 1px solid ${(p) => p.theme.colors.input.border};
  }

  textarea{
    min-height: 150px;
    resize: vertical;
  }

  input:focus, select:focus, textarea:focus{
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: 0 5px 12px ${(p) => p.theme.colors.shadow};
  }

  ul{
    list-style-position: inside;
    list-style-type: none;
  }

  p, a{
    font-weight: 200;
    color: ${(p) => p.theme.colors.text.secondary};
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }


  h1, h2, h3, h4, h5, h6{
    font-weight: 300;
    color: ${(p) => p.theme.colors.text.primary};
  }

  .center{
    width: 100%;
    max-width: 1280px;
    padding: 0 4%;
    margin: 0 auto;
  }

  .pageTitle {
    user-select: none;
    text-align: center;
    padding: 15px 0;
    font-size: 2rem;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    box-shadow: 0 2px 10px ${(p) => p.theme.colors.shadow};
    background-color: ${(p) => p.theme.colors.backgroundDiv};
  }
`;

export default GlobalStyle;
