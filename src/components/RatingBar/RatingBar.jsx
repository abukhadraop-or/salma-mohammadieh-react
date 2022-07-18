import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './rating-bar.styles';

/**
 * Render RatingBar component.
 *
 * @param {double} rating Movie's rating.
 *
 * @return {JSX.Element}
 */
function RatingBar({ rating }) {
  return (
    <styles.RatingContainer>
      <styles.RatingBody>
        <styles.Percentage>{rating * 10}%</styles.Percentage>
      </styles.RatingBody>
      <styles.RatingRing rating={rating * 10} />
    </styles.RatingContainer>
  );
}

RatingBar.propTypes = {
  rating: PropTypes.number,
};
RatingBar.defaultProps = {
  rating: 0,
};

export default RatingBar;
