import { getMovieDetails } from 'components/Api';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { MovieGenreItem } from './MovieGenreItem';
import { lazy } from 'react';
import { StyledDiv } from './MovieDetails.styled';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  useEffect(() => {
    getMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(error => setError(error.message));
  }, [movieId]);
  const { title, release_date, poster_path, vote_average, overview, genres } = movie;
  return (
    <>
      <Link to={backLinkHref.current}>{'<--'}Go back</Link>
        {error !== null && <p>Oops, something went wrong... Error: {error}</p>}
        <StyledDiv>
        <img
          src={'http://image.tmdb.org/t/p/w500/' + poster_path}
          alt={title}
          width={400}
          height={500}
        />
        <div>
         <h3>
          {title}({release_date})
        </h3>
        <span>User score: {Math.round(vote_average)}/10</span>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {Array.isArray(genres) &&
            genres.map(gen => <MovieGenreItem genre={gen} key={gen.id} />)}
        </ul>
        </div>
        </StyledDiv>
      
      <div>
        <Link to="cast">Cast</Link>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
      </Routes>

      <div>
        <Link to="reviews">Reviews</Link>
      </div>
      <Routes>
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
export default MovieDetails;
