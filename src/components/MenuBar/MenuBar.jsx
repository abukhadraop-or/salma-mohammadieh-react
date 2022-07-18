import React from 'react';
import ListItems from 'components/ListItems/ListItems';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import * as styles from './menu-bar.styles';

/**
 * Render a MenuBar component.
 *
 * @return {JSX.Element}
 */
function MenuBar() {
  return (
    <styles.Container>
      <styles.Logo href="/">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="The Movie Database (TMDB)"
          width="154"
          height="20"
        />
      </styles.Logo>
      <styles.ListItemContainer>
        <ListItems />
      </styles.ListItemContainer>
      <NavigationBar />
    </styles.Container>
  );
}

export default MenuBar;
