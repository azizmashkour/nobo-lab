import { environment as env } from '../environments/env.dev';

export async function searchMovies(query) {
  const toHttpParams = `${env.API_BASE_URL + env.API_MOVIES_URL}?q=`;
  return await fetch(toHttpParams + (query || env.DEFAULT_SEARCH_MOVIE));
}

export async function findMovie(id) {
  return await fetch(`${env.API_BASE_URL + env.API_MOVIE_URL}/` + id);
}
