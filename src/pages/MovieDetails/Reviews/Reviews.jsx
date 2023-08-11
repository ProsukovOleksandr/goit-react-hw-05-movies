import { getMovieReview } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './ReviewsItem';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReview(movieId)
      .then(review => setReviews(review))
      .catch(error => setError(error.message));
  }, [movieId]);
  return (
    <div>
      {error !== null && <p>Oops, something went wrong... Error: {error}</p>}
      {reviews.length === 0 && <p>We dont have any reviews for this movie</p>}
      <ul>
        {Array.isArray(reviews) &&
          reviews.map(review => (
            <ReviewsItem review={review} key={review.id} />
          ))}
      </ul>
    </div>
  );
};
export default Reviews;
