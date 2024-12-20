import { TMDBImageOptions } from "./types";

/**
 * Generates a full URL for TMDB images.
 * @param {TMDBImageOptions} options - Options for image generation.
 * @returns {string} The full URL for the TMDB image.
 */
export function getTMDBImage({ path, size }: TMDBImageOptions): string {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

/**
 * Returns the TMDB image URL or a placeholder if the path is missing.
 * @param {Partial<TMDBImageOptions>} options - Options for image generation, path is optional.
 * @returns {string} The image URL or placeholder.
 */
export function getImageOrPlaceholder({
  path,
  size,
}: Partial<TMDBImageOptions>): string {
  return path
    ? getTMDBImage({ path, size: size || "original" })
    : require('@/assets/images/placeholders/empty.png');
}