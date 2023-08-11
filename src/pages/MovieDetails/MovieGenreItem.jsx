import PropTypes from "prop-types";
export const MovieGenreItem = ({ genre }) => {
  return <li>{genre.name}</li>;
};
MovieGenreItem.propTypes  = {
  genre:  PropTypes.shape({
    name: PropTypes.string
  })
}