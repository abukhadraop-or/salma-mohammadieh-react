import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RatingBar from './RatingBar';

const CardContentDiv = styled.div`
  padding: 0.9rem;
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    width: 100%;
    padding: 0.5rem;
    align-content: flex-start;
  }
`;

const A = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  width: 100%;
  word-wrap: normal;
  overflow-wrap: break-word;
  text-align: left;
  }
`;

const P = styled.p`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const OverView = styled.div`
  height: auto;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  overflow: hidden;
`;

/**
 * Component for showing movie details for the user.
 *
 * @component
 */

function CardContent({ movie }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);

  /**
   * sets the isDesktop based in the screen size
   */
  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const date = new Date(movie.releaseDate);

  return (
    <CardContentDiv>
      <RatingBar rating={movie.rating} />
      <TitleDiv>
        <A href="/">{movie.title}</A>
        <P>{`${date.toLocaleString('default', {
          month: 'short',
        })} ${date.getDay()},${date.getFullYear()}`}</P>
      </TitleDiv>
      {isDesktop ? (
        ''
      ) : (
        <OverView>
          <p>{movie.overview}</p>
        </OverView>
      )}
    </CardContentDiv>
  );
}

CardContent.propTypes = {
  /**
   * movie's object
   */
  movie: PropTypes.shape({
    /**
     * movie's id
     */
    id: PropTypes.number,
    /**
     * movie's overview
     */
    overview: PropTypes.string,
    /**
     * movie's rating
     */
    rating: PropTypes.number,
    /**
     * movie's release date
     */
    releaseDate: PropTypes.string,
    /**
     * movie's title
     */
    title: PropTypes.string,
  }),
};
CardContent.defaultProps = {
  movie: {
    id: 0,
    overview: '',
    rating: 0,
    releaseDate: '',
    title: '',
  },
};

export default CardContent;
