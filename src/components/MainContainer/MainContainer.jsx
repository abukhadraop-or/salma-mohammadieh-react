import React, { useEffect, useCallback, useState } from 'react';
import Card from 'components/Card/Card';
import SortColumn from 'components/SortColumn/SortColumn';
import fetchMovies from 'services/fetch-movies';
import * as styles from './Main-constainer.styles';

/**
 * Render MainContainer component
 *
 * @return {JSX.Element}
 */
function MainContainer() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortByValue, setSortByValue] = useState('popularity.desc');

  /**
   * Fetch list of movies from an api.
   */
  const fetchMovie = useCallback(async () => {
    const data = await fetchMovies(sortByValue, pageNumber);
    const moviesList = data.map((movieData) => ({
      id: movieData.id,
      imageUrl: movieData.poster_path,
      overview: movieData.overview,
      rating: movieData.vote_average,
      releaseDate: movieData.release_date,
      title: movieData.title,
    }));
    setMovies(() => [...movies, ...moviesList]);
    setPageNumber(pageNumber + 1);
  }, [pageNumber, movies, sortByValue]);

  /**
   * Sets movies, pageNumber and sortByValue on user selection.
   */
  const selectChangeHandler = (selection) => {
    setMovies([]);
    setPageNumber(1);
    setSortByValue(selection);
  };

  useEffect(() => {
    fetchMovie();
  }, [sortByValue]);

  return (
    <styles.Main>
      <styles.Section>
        <styles.WrapperDiv>
          <styles.InnerContainer>
            <h2>Popular Movies</h2>
          </styles.InnerContainer>
          <styles.MainContainer>
            <styles.InnerContainer>
              <SortColumn onSelectChange={selectChangeHandler} />
            </styles.InnerContainer>
            <styles.MoviesContainer>
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </styles.MoviesContainer>
            <styles.Button type="button" onClick={fetchMovie}>
              Load More
            </styles.Button>
          </styles.MainContainer>
        </styles.WrapperDiv>
      </styles.Section>
    </styles.Main>
  );
}

export default MainContainer;
