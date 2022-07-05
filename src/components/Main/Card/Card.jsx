import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';
import Options from './Options';
import CardContent from './CardContent';

const Div = styled.div(
  ({ displayStatus }) => `
  display: flex;
  flex-wrap: nowrap;
  align-content: flex-start;
  background-color:${displayStatus ? 'none' : 'rgba(0,0,0,0.5)'}; 
  @media (min-width: 700px) {
    width: 100%;
    flex-wrap: wrap;
  }
`
);

const Img = styled.img(
  ({ displayStatus }) => `
  opacity: ${displayStatus ? '' : '0.1'};
  display: inline-block;
  width:6rem;
  @media (min-width: 700px) {
    width: auto;
    height: 100%;
    outline: none;
  }
`
);

const WrapperDiv = styled.div(
  ({ displayStatus }) => `
  position: absolute;
  top: 30px;
  z-index: 10002;
  right: -50px;
  background-color: white;
  border-radius: 0.25rem;
  color: rgba(0, 0, 0, 0.6);
  display: ${displayStatus ? 'none' : 'block'};
`
);

const MainDiv = styled.div`
  position: relative;
`;

const Span = styled.span`
  &:hover {
    color: rgb(1, 119, 210);
  }
  display: none;
  @media (min-width: 700px) {
    display: flex;
    position: absolute;
    right: 0;
    z-index: 1;
    padding: 0.6rem;
    color: white;
    cursor: pointer;
  }
`;

const ImageDiv = styled.div`
  float: left;
  display: inline;
  @media (min-width: 700px) {
    width: 100%;
  }
`;

/**
 * Component for showing movie details for the user.
 *
 * @component
 */

function Card({ movie }) {
  const [displayStatus, setDisplayStatus] = useState(true);
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

  /**
   * sets the displayStatus on click
   */
  const clickHandler = useCallback(
    () => setDisplayStatus(!displayStatus),
    [displayStatus]
  );

  return (
    <MainDiv>
      <Span onClick={clickHandler}>
        <FaEllipsisH />
      </Span>
      <WrapperDiv displayStatus={displayStatus} role="tooltip">
        <Options />
      </WrapperDiv>
      <Div displayStatus={displayStatus}>
        <ImageDiv>
          <Img
            src={
              isDesktop
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.imageUrl}`
                : `https://image.tmdb.org/t/p/w130_and_h195_bestv2/${movie.imageUrl}`
            }
            alt=""
            onError={(e) => {
              e.target.src =
                'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
              e.target.style = 'height:150px;';
            }}
            displayStatus={displayStatus}
          />
        </ImageDiv>
        <CardContent movie={movie} />
      </Div>
    </MainDiv>
  );
}

Card.propTypes = {
  /**
   * movie's object
   */
  movie: PropTypes.shape({
    /**
     * movie's image url
     */
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
