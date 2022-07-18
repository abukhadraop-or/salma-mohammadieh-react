import React from 'react';
import { FaList, FaHeart, FaBookmark, FaStar } from 'react-icons/fa';
import * as styles from './options.styles';

/**
 * Render Options component
 *
 * @return {JSX.Element}
 */
function Options() {
  return (
    <>
      <styles.InnerDiv>
        <FaList color="black" size="0.7rem" />
        Add To List
      </styles.InnerDiv>
      <styles.InnerDiv>
        <FaHeart color="black" size="0.7rem" />
        Favorite
      </styles.InnerDiv>
      <styles.InnerDiv>
        <FaBookmark color="black" size="0.7rem" />
        Watchlist
      </styles.InnerDiv>
      <styles.InnerDiv>
        <FaStar color="black" size="0.7rem" />
        Your Rating
      </styles.InnerDiv>
    </>
  );
}

export default Options;
