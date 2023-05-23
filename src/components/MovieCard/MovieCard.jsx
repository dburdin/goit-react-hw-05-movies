import PropTypes from 'prop-types';

import { CardInfo, CardContainer } from './MovieCard.styled';

export const MovieCard = ({ movieInfo }) => {
  const { title, vote_average, overview, genres, poster_path } = movieInfo;

  const imageUrl = `http://image.tmdb.org/t/p/w300/${poster_path}`;

  const updatedGenres = genres.map(genre => genre.name).join(',');
  const score = Math.round(vote_average * 10);

  return (
    <CardContainer>
      <img
        src={imageUrl}
        alt={title}
        height="300"
        style={{ borderRadius: '30px' }}
      ></img>
      <CardInfo>
        <b>{title}</b>
        <p>User score: {score}%</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres</b>
        <p>{updatedGenres}</p>
      </CardInfo>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
