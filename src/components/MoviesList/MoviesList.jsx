import PropTypes from 'prop-types';

import { List } from './MoviesList.styled';
import { LinkItem } from './MoviesList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkItem>
          </li>
        );
      })}
    </List>
  );
};

MoviesList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.object.isRequired,
};
