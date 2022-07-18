import React from 'react';
import ListItems from 'components/ListItems/ListItems';
import * as styles from './side-bar.styles';

function SideBar() {
  return (
    <styles.Container>
      <ListItems />
    </styles.Container>
  );
}

export default SideBar;
