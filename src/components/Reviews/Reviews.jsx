import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'API/api';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setReviewsInfo(response.results))
      .catch(error => console.log('error.message', error.message));
  }, [movieId]);

  return reviewsInfo.length > 0 ? (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {reviewsInfo.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Reviews not found</p>
  );
};

export default Reviews;
