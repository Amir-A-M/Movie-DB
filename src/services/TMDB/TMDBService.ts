import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_AUTH_TOKEN}`, // Remember this is not safe! 
  },
  params: {
    language: 'en-US',
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

  async getTrending() {
    return this.fetchWithCache('/trending/movie/week');
  }
}

export default new TMDBService();
