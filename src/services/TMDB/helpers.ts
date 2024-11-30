import { TMDBImageOptions } from "./types";

/**
 * Generates a full URL for TMDB images.
 * @param {TMDBImageOptions} options - Options for image generation.
 * @returns {string} The full URL for the TMDB image.
 */
export function getTMDBImage({ path, size }: TMDBImageOptions): string {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}