import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovies } from 'API/api';
import { SearchForm, SearchInput, SearchButton } from './Movies.styled';

import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');

  useEffect(() => {
    if (!name) {
      return;
    }
    getMovies(name)
      .then(response => {
        if (response.total_results === 0) {
          setMovies([]);
          return window.alert('Nothing Found! Please repeat your request!');
        }
        setMovies(response.results);
      })
      .catch(error => console.log('error.message', error.message));
  }, [name]);

  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target.movie.value.toLowerCase();

    if (query.trim() === '') {
      return window.alert('You need enter something!');
    }
    setSearchParams({ name: query });

    event.currentTarget.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="movie"
          autoComplete="off"
          placeholder="Search movies"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
