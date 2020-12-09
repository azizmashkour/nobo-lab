import {
  API_BASE_URL,
  API_MOVIES_URL,
  API_MOVIE_URL,
  DEFAULT_SEARCH_MOVIE,
} from '../constants/commons';

export async function searchMovies(query) {
  return await fetch(`${API_BASE_URL + API_MOVIES_URL}` + '?q=' + (query || DEFAULT_SEARCH_MOVIE));
}

export async function findMovie(id) {
  return await fetch(`${API_BASE_URL + API_MOVIE_URL}/` + id);
}
