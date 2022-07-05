import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import SortColumn from './SortColumn/SortColumn';
import Card from './Card/Card';

const Container = styled.div`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;

  @media (min-width: 700px) {
    display: grid;
    gap: 2rem;
    max-width: 85rem;
    grid-template-columns: 18% auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const ContainerDiv = styled.div`
  @media (min-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const WrapperDiv = styled.div`
  max-width: 88rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  padding: 1.3rem;
  @media (min-width: 700px) {
    padding: 2rem 2.5rem;
  }
`;

const Button = styled.button`
  color: white;
  grid-column-start: 2;
  grid-column-end: 3;
  border-radius: 0.5rem;
  background-color: rgba(1, 180, 228, 1);
  font-size: 1.5rem;
  font-weight: 700;
  border-color: transparent;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  margin-top: 0.8rem;
  &:hover {
    color: black;
  }
`;

const MoviesContainer = styled.div`
  display: grid;
  gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: auto;
  & > div {
    background-color: white;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border-radius: 0.5rem;
  }

  @media (min-width: 700px) {
    padding: 0.7rem;
    grid-template-columns: auto auto;
  }
  @media (min-width: 800px) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: 900px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (min-width: 1040px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

/**
 * Component for showing details of the user.
 *
 * @component
 */

function MainContainer() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortByValue, setSortByValue] = useState('popularity.desc');

  /**
   * fetch list of movies from an api
   */
  const fetchMovie = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=72f2362d1dc4d1df19e70f15cf532ce5&sort_by=${sortByValue}&page=${pageNumber}`
    );
    const data = await response.json();
    const moviesList = data.results.map((movieData) => ({
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
   * sets movies, pageNumber and sortByValue on user selection
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
    <Section>
      <WrapperDiv>
        <ContainerDiv>
          <h2>Popular Movies</h2>
        </ContainerDiv>
        <Container>
          <ContainerDiv>
            <SortColumn onSelectChange={selectChangeHandler} />
          </ContainerDiv>
          <MoviesContainer>
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </MoviesContainer>
          <Button type="button" onClick={fetchMovie}>
            Load More
          </Button>
        </Container>
      </WrapperDiv>
    </Section>
  );
}

export default MainContainer;
