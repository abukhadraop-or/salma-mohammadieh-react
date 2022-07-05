import React from 'react';
import styled from 'styled-components';
import NavBar from 'components/NavBar/NavBar';
import MainContainer from 'components/Main/MainContainer';
import FooterContent from 'components/Footer/FooterContent';

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(3, 37, 65, 1);
  width: 100%;
  z-index: 10;
  @font-face {
    font-family: font;
    src: url('https://www.themoviedb.org/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700-d67f7dff97d105f4ac5616b00fc7822ce2c33f653ece2f547995e6a71bb7b993.woff2');
  }
  font-family: font;
`;
const Main = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: #fff;
  padding-top: 4rem;
  @font-face {
    font-family: font;
    src: url('https://www.themoviedb.org/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700-d67f7dff97d105f4ac5616b00fc7822ce2c33f653ece2f547995e6a71bb7b993.woff2');
  }
  font-family: font;
`;

const Footer = styled.footer`
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  padding-left: 1rem;
  background: #031d33;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;

  @media (min-width: 600px) {
    justify-content: center;
  }

  @font-face {
    font-family: font;
    src: url('https://www.themoviedb.org/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700-d67f7dff97d105f4ac5616b00fc7822ce2c33f653ece2f547995e6a71bb7b993.woff2');
  }
  font-family: font;
`;

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <MainContainer />
      </Main>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
}

export default App;
