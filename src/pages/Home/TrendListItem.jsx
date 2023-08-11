import {  useLocation } from 'react-router-dom';
import { StyledListItem,StyledLink  } from './Home.styled';
import PropTypes from "prop-types";
export const TrendListItem = ({ movie }) => {
  const location = useLocation();
  return (
    <StyledListItem>
      <StyledLink state={{from: location}} to={'/movies/' + movie.id}>
        <img
          src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path}
          alt={movie.title}
          width={100}
          height={150}
        />
        {movie.title}
      </StyledLink>
    </StyledListItem>
  );
};
TrendListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string
  })
}