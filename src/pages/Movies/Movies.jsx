import {  useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getQuerry } from 'components/Api';
import { TrendListItem } from 'pages/Home/TrendListItem';
import { StyledInput,StyledButton } from './Movies.styled';
const Movies = () => {
  const [movies, setMovies] = useState({});
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryString = searchParams.get('query');
  const { results } = movies;
  useEffect(() => {
    if (!queryString) return;

    getQuerry(queryString)
      .then(movies => setMovies(movies))
      .catch(error => setError(error.message));
  }, [queryString]);

  const HandleSubmit = event => {
    event.preventDefault();

    const filmName = event.currentTarget.elements.filmName.value;

    setSearchParams({
      query: filmName,
    });
  };
  return (
    <>
      <div>
        <form onSubmit={HandleSubmit}>
          <StyledInput
            type="text"
            required
            placeholder="Enter film name..."
            name="filmName"
            defaultValue={queryString ?? ''}
          />
          <StyledButton type="submit">Search</StyledButton>
        </form>
      </div>
      <div>
        {error !== null && <p>Oops, something went wrong... Error: {error}</p>}
        <ul>
          {Array.isArray(results) &&
            results.length > 0 &&
            results.map(movie => (
              <TrendListItem movie={movie} key={movie.id} />
            ))}
        </ul>
      </div>
    </>
  );
};
export default Movies;
