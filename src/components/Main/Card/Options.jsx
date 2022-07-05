import React from 'react';
import styled from 'styled-components';
import { FaList, FaHeart, FaBookmark, FaStar } from 'react-icons/fa';

const InnerDiv = styled.div`
  border-top: 1px solid rgba(33, 37, 41, 0.15);
  padding: 0.7rem 0.5rem;
`;

/**
 * Component for showing options on click.
 *
 * @component
 */
function Options() {
  return (
    <>
      <InnerDiv>
        <FaList color="black" size="0.7rem" />
        Add To List
      </InnerDiv>
      <InnerDiv>
        <FaHeart color="black" size="0.7rem" />
        Favorite{' '}
      </InnerDiv>
      <InnerDiv>
        <FaBookmark color="black" size="0.7rem" />
        Watchlist
      </InnerDiv>
      <InnerDiv>
        <FaStar color="black" size="0.7rem" />
        Your Rating
      </InnerDiv>
    </>
  );
}

export default Options;
