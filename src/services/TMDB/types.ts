import { Float } from "react-native/Libraries/Types/CodegenTypes";

// TMDB API Common Movie/Show Item
export interface TMDBMovie {
  id: number;
  title?: string; // For movies
  name?: string; // For TV shows
  backdrop_path?: string; // image
  overview?: string; // description
  first_air_date?: string; // For TV shows
  media_type?: string; // 'movie' or 'tv'
  vote_average?: Float; // 8.2

  release_date?: string; // "2024-10-22"
}

// TMDB API Common Movie/Show Item
export interface TMDBMovieDetail {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number | null; // Sometimes runtime might be missing
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// TMDB API Response
export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

// Supported sizes for TMDB images
export type TMDBImageSize =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original'; // From TMDB documentation

export interface TMDBImageOptions {
  path: string; // The image path returned by TMDB
  size: TMDBImageSize; // The desired image size
}

export interface TMDBYoutubeId {
  key: string;
}

export interface TMDBGenre {
  name: string;
  id: number
}
