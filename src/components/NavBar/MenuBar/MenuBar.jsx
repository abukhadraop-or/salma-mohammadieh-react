import React from 'react';
import styled from 'styled-components';
import ListItems from './ListItems';
import NavigationBar from './NavigationBar';

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: visible;
  width: 100%;

  @media (min-width: 970px) {
    width: auto;
  }
`;
const A = styled.a`
  display: none;
  @media (min-width: 970px) {
    display: inherit;
  }
`;

/**
 * Component for showing the menu bar in the navbar.
 *
 * @component
 */

function MenuBar() {
  return (
    <Div>
      <A href="/">
        {' '}
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="The Movie Database (TMDB)"
          width="154"
          height="20"
        />
      </A>
      <ListItems />
      <NavigationBar />
    </Div>
  );
}

export default MenuBar;
