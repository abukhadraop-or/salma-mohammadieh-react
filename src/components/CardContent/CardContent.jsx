import React from 'react';
import PropTypes from 'prop-types';
import UseDesktopCalculator from 'hooks/UesDesktopCalculator';
import RatingBar from 'components/RatingBar/RatingBar';
import * as styles from './card-content.styles';

/**
 * Render a CardContent input
 *
 * @param {object} movie movies details
 * @param {number} [movie.id] movies id.
 * @param {string} [movie.title] movies title.
 * @param {number} [movie.rating] movies rating.
 * @param {string} [movie.releaseDate] movies release date.
 * @param {string} [movie.overview] movies overview.
 *
 * @return {JSX.Element}
 */
function CardContent({ movie }) {
  const isDesktop = UseDesktopCalculator();

  const date = new Date(movie.releaseDate);

  return (
    <styles.CardContentDiv>
      <RatingBar rating={movie.rating} />
      <styles.TitleDiv>
        <styles.MovieTitle href="/">{movie.title}</styles.MovieTitle>
        <styles.MovieDate>{`${date.toLocaleString('default', {
          month: 'short',
        })} ${date.getDay()},${date.getFullYear()}`}</styles.MovieDate>
      </styles.TitleDiv>
      {!isDesktop && (
        <styles.OverView>
          <p>{movie.overview}</p>
        </styles.OverView>
      )}
    </styles.CardContentDiv>
  );
}

CardContent.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    overview: PropTypes.string,
    rating: PropTypes.number,
    releaseDate: PropTypes.string,
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
