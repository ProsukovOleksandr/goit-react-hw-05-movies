import { getTrendingMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { TrendListItem } from './TrendListItem';
const Home = () => {
  const [movies, setMovies] = useState([]);
const [error, setError]=useState(null);
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results)).catch(error => setError(error.message))
  }, []);
  return (
    <div>
      {error!==null && (
        <p>Oops, something went wrong... Error: {error}</p>
      )}
      <ul>
        {Array.isArray(movies) && movies.length > 0 &&
          movies.map(movie => <TrendListItem movie={movie} key={movie.id} />)}
      </ul>
    </div>
  );
};
export default Home;
