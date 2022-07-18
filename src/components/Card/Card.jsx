import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';
import Options from 'components/Options/Options';
import CardContent from 'components/CardContent/CardContent';
import UseDesktopCalculator from 'hooks/UesDesktopCalculator';
import * as styles from './card.styles';

/**
 * Render a Card component.
 *
 * @param {object} movie Contains the movie's details.
 * @param {string} {movie.imageUrl=https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg} Movies image.
 *
 * @return {JSX.Element}
 */
function Card({ movie }) {
  const [displayStatus, setDisplayStatus] = useState(true);
  const isDesktop = UseDesktopCalculator();

  /**
   * Sets the displayStatus on click.
   */
  const clickHandler = useCallback(
    () => setDisplayStatus(!displayStatus),
    [displayStatus]
  );

  return (
    <styles.MainContainer>
      <styles.OptionsIcon onClick={clickHandler}>
        <FaEllipsisH />
      </styles.OptionsIcon>
      <styles.Wrapper displayStatus={displayStatus} role="tooltip">
        <Options />
      </styles.Wrapper>
      <styles.InnerContainer displayStatus={displayStatus}>
        <styles.ImageContainer>
          <styles.MovieImage
            src={
              isDesktop
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.imageUrl}`
                : `https://image.tmdb.org/t/p/w130_and_h195_bestv2/${movie.imageUrl}`
            }
            alt=""
            displayStatus={displayStatus}
          />
        </styles.ImageContainer>
        <CardContent movie={movie} />
      </styles.InnerContainer>
    </styles.MainContainer>
  );
}

Card.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string,
  }),
};
Card.defaultProps = {
  movie: {
    imageUrl:
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg',
  },
};
export default Card;
