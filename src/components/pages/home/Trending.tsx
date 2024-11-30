import React from 'react';
import BasicCarouselWrapper, {
  normalizeCarouselData,
} from '../../carousel/basic/BasicCarouselWrapper';
import { Href } from 'expo-router';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { exampleMovieList } from '@/src/constants/sampleData';
import { Box } from '../../ui/box';

const Trending = () => {
  const { data, loading, error } = useFetch(() => TMDBService.getTrending());

  console.log({ data, loading, error });

  if (error || data === null) {
    return <Box>Error</Box>;
  }

  const carouselData = loading
    ? exampleMovieList
    : normalizeCarouselData({ data });

  return (
    <BasicCarouselWrapper
      title='Trending'
      carouselItems={carouselData}
      cta={{
        href: './' as Href,
      }}
    />
  );
};

export default Trending;
