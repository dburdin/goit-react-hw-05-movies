import { getMovieCredits } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastList, CastItem } from './Cast.styled';
import { getPosterUrl } from 'API/api';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  const BASE_IMG_URL = `http://image.tmdb.org/t/p/w300/`;

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => {
        setCastInfo(response.cast);
      })
      .catch(error => console.log('error.message', error.message));
  }, [movieId]);

  return (
    <>
      <CastList>
        {castInfo.map(({ id, name, profile_path, character }) => {
          return (
            <CastItem key={id}>
              <img width="150px" src={getPosterUrl(profile_path)} alt={name} />
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
