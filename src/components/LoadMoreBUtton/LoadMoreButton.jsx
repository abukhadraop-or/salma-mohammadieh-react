import React from 'react';
import * as styles from './load-more-button.styles';

/**
 * Render a LoadMoreButton component
 *
 * @return {JSX.Element}
 */
function LoadMoreButton() {
  return (
    <styles.LoadButton>
      <styles.PlaceHolder>
        <styles.Text href="/">Load More</styles.Text>
      </styles.PlaceHolder>
    </styles.LoadButton>
  );
}

export default LoadMoreButton;
