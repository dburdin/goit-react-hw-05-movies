import { getMovieCredits } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => {
        setCastInfo(response.cast);
      })
      .catch(error => console.log('error.message', error.message));
  }, [movieId]);

  const BASE_IMG_URL = `http://image.tmdb.org/t/p/w300/`;

  return (
    <>
      <CastList>
        {castInfo.map(({ id, name, profile_path, character }) => {
          return (
            <CastItem key={id}>
              <img
                width="150px"
                src={`${BASE_IMG_URL}${profile_path}`}
                alt={name}
              />
              <b>Name:{name}</b>
              <p>Role: {character}</p>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
