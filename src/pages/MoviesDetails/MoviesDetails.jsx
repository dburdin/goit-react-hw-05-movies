import { useState, useEffect, useRef, Suspense } from 'react';
import { useLocation, Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'API/api';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => {
        setMovieInfo(response);
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  }, [movieId]);

  return (
    <>
      <Link
        to={backLink.current}
        style={{
          color: 'grey',
          width: '50px',
          height: '50px',
          textDecoration: 'none',
        }}
      >
        Back
      </Link>

      {movieInfo && <MovieCard movieInfo={movieInfo}></MovieCard>}
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px',
        }}
      >
        <li>
          <Link
            style={{
              color: 'grey',
              width: '50px',
              height: '50px',
              textDecoration: 'none',
            }}
            to="cast"
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: 'grey',
              width: '50px',
              height: '50px',
              textDecoration: 'none',
            }}
            to="reviews"
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
