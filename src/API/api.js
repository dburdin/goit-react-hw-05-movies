import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'b687de23fc0b495d34f2b135cc7089d8';

const BASE_IMG_URL = `http://image.tmdb.org/t/p/w300/`;
const NOT_FOUND_IMG_URL =
  'https://www.carnival.com.au/_ui/responsive/ccl/assets/images/notfound_placeholder.svg';

export const getMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const getMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getPosterUrl = url =>
  url ? BASE_IMG_URL + url : NOT_FOUND_IMG_URL;
