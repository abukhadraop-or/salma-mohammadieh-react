import React from 'react';
import * as styles from './list-items.styles';

/**
 * Render ListItems component.
 *
 * @return {JSX.Element}
 */
function ListItems() {
  return (
    <styles.ListItems>
      <styles.ListItem>
        <a href="/">Movies</a>
      </styles.ListItem>
      <styles.ListItem>
        <a href="/">TVShows</a>
      </styles.ListItem>
      <styles.ListItem>
        <a href="/">People</a>
      </styles.ListItem>
      <styles.ListItem>
        <a href="/">More</a>
      </styles.ListItem>
    </styles.ListItems>
  );
}

export default ListItems;
