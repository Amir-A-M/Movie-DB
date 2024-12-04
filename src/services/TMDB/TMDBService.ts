import axios from 'axios';
import { TMDBMovie, TMDBResponse, TMDBYoutubeId } from './types';
import { UnknownOutputParams } from 'expo-router';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_AUTH_TOKEN}`, // Remember this is not safe! 
  },
  params: {
    language: 'en-US',
    include_adult: false,
  }
});

const cache = new Map<string, { data: any; }>();


class TMDBService {
  // Helper to fetch data with caching
  async fetchWithCache(endpoint: string) {

    if (cache.has(endpoint)) {
      const { data } = cache.get(endpoint)!;
      return data;
    }

    const response = await api.get(endpoint);
    const responseData = response.data;

    cache.set(endpoint, { data: responseData });

    return responseData;
  }

  // API methods
  async DiscoverMovies(searchParams: UnknownOutputParams) {
    let search = '?';

    Object.entries(searchParams).forEach(
      ([key, value]) => search += `${key}=${value},`
    );

    return this.fetchWithCache('/movie/popular' + search);
  }

  async getPopularMovies() {
    return this.fetchWithCache('/movie/popular');
  }

  async getGenres() {
    return this.fetchWithCache('/genre/movie/list');
  }

  async getMovieDetails(movieId: number) {
    return this.fetchWithCache(`/movie/${movieId}`);
  }

  async getMoviesByGenre(genreId: number) {
    return this.fetchWithCache(`/discover/movie?with_genres=${genreId}`);
  }

  async getTrending(): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetchWithCache('/trending/movie/week');
  }

  async getNowPlaying(): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetchWithCache('/movie/now_playing');
  }

  async getUpcoming(): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetchWithCache('/movie/upcoming');
  }

  async getPopular(): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetchWithCache('/movie/popular');
  }
  async getTrailers({ start = 0, limit = -1 }: { start?: number, limit?: number }): Promise<TMDBYoutubeId[]> {
    const movieListResponse = await this.fetchWithCache('/movie/upcoming');
    const movieList = movieListResponse?.results || [];

    const trailerPromises = movieList.slice(start, limit).map(async (movie: { id: number }) => {
      const videoResponse = await this.fetchWithCache(`/movie/${movie.id}/videos`);

      const trailers = videoResponse?.results.filter(
        (video: { site: string; type: string; key: string; }) =>
          video.site === 'YouTube' && video.type === 'Trailer' && video.key
      );

      return {
        key: trailers.length > 0 ? trailers[0].key : null,
      };
    });

    const youtubeIds = (await Promise.all(trailerPromises)).filter((movie) => movie.key !== null);

    return youtubeIds;
  }

}

export default new TMDBService();
