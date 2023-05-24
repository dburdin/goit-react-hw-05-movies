import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'API/api';

import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => console.error('error.message', error.message));
  }, []);

  return (
    <>
      <MoviesList movies={trendingMovies}></MoviesList>
    </>
  );
};

export default Home;
