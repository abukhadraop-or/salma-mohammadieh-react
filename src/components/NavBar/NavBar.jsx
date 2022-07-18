import React from 'react';
import MenuBar from 'components/MenuBar/MenuBar';
import ToolsBar from 'components/ToolsBar/ToolsBar';
import * as styles from './nav-bar.styles';

/**
 * Render NavBAr component.
 *
 * @return {JSX.Element}
 */

function NavBar() {
  return (
    <styles.Header>
      <styles.MainContainer>
        <styles.SubContainer>
          <MenuBar />
          <ToolsBar />
        </styles.SubContainer>
      </styles.MainContainer>
    </styles.Header>
  );
}

export default NavBar;
