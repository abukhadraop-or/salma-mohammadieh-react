import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: font;
    src: url('https://www.themoviedb.org/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700-d67f7dff97d105f4ac5616b00fc7822ce2c33f653ece2f547995e6a71bb7b993.woff2');
  }
*,*::after,*::before{box-sizing: border-box;}
body { 
  font-family:font;
}
ul {
  list-style-type: none;
}

`;

export default GlobalStyle;
