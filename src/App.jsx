import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainContainer from './components/MainContainer/MainContainer';
import Footer from './components/Footer/Footer';
import GlobalStyle from './shared/global-styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
