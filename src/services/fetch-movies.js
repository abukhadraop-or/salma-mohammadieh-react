/**
 * Make get request.
 *
 * @param {string} sortByValue Sortby value.
 * @param {number} pageNumber Page Number.
 *
 * @return {Promise<Object>} Promise fulfilled with response data.
 */
const fetchMovies = async (sortByValue, pageNumber) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=72f2362d1dc4d1df19e70f15cf532ce5&sort_by=${sortByValue}&page=${pageNumber}`
  );
  const data = await response.json();
  return data.results;
};

export default fetchMovies;
