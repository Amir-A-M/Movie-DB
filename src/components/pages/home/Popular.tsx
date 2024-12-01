import React, { useMemo } from 'react';
import BasicCarouselWrapper, {
  normalizeCarouselData,
} from '../../carousel/basic/BasicCarouselWrapper';
import { Href } from 'expo-router';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { exampleMovieList } from '@/src/constants/sampleData';
import { Box } from '../../ui/box';

const Popular = () => {
  const { data, loading, error } = useFetch(() => TMDBService.getPopular());

  const carouselData = useMemo(() => {
    if (loading || !data) {
      return exampleMovieList;
    }
    return normalizeCarouselData({ data });
  }, [loading, data]);

  if (error) {
    return <Box>Error</Box>;
  }

  return (
    <BasicCarouselWrapper
      title='Popular'
      carouselItems={carouselData}
      cta={{
        title: 'Popular Movies',
        href: './' as Href,
      }}
    />
  );
};

export default Popular;
