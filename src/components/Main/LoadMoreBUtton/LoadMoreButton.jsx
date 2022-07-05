import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: rgba(1, 180, 228, 1);
`;

const P = styled.p`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;

/**
 * Component for displaying a button with a load more text
 *
 * @component
 */

function LoadMoreButton() {
  return (
    <Div>
      <P>
        <A href="/">Load More</A>
      </P>
    </Div>
  );
}

export default LoadMoreButton;
