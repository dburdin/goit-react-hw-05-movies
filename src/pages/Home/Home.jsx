import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'API/api';

import { TrendingList, TrendingItem, TrendingItemLink } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => console.error('error.message', error.message));
  }, []);

  return (
    <>
      <TrendingList>
        {trendingMovies.map(movie => {
          return (
            <TrendingItem key={movie.id}>
              <TrendingItemLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </TrendingItemLink>
            </TrendingItem>
          );
        })}
      </TrendingList>
    </>
  );
};

export default Home;
