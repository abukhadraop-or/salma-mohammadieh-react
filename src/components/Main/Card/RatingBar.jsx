import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingBody = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  background: rgb(8, 28, 43);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatingRing = styled.div(
  ({ rating }) => `
  border-radius: 50%;
  height: 1.7rem;
  width: 1.7rem;
  background:${
    (rating >= 70 &&
      `conic-gradient(rgb(33, 208, 122) ${rating}%, rgb(32, 69, 41) ${rating}%);`) ||
    (rating >= 40 &&
      `conic-gradient(rgb(210, 213, 49) ${rating}%, rgb(66, 61, 15) ${rating}%);`) ||
    (rating < 40 &&
      `conic-gradient(rgb(219, 35, 96) ${rating}%, rgb(87, 20, 53) ${rating}%);`)
  }
`
);

const P = styled.p`
  padding: 1rem;
  font-size: 0.6em;
  color: white;
  margin: 0;
`;

const RatingContainer = styled.div`
  display: none;

  @media (min-width: 700px) {
    position: relative;
    top: -1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(8, 28, 43);
    border-radius: 50%;
    width: 1.9rem;
    height: 1.9rem;
    transition: transform 0.2s;
    transform: scale(1);
  }
`;

/**
 * Component for showing movie's rating as a progress bar.
 *
 * @component
 */

function RatingBar({ rating }) {
  return (
    <RatingContainer>
      <RatingBody>
        <P>{rating * 10}%</P>{' '}
      </RatingBody>
      <RatingRing rating={rating * 10} />
    </RatingContainer>
  );
}

RatingBar.propTypes = {
  /**
   * movie's rating
   */
  rating: PropTypes.number,
};
RatingBar.defaultProps = {
  rating: 0,
};

export default RatingBar;
