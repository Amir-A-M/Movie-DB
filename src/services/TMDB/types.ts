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
