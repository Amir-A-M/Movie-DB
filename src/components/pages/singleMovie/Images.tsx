import React from 'react';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { Box } from '../../ui/box';
import { Image } from '../../ui/image';
import { getImageOrPlaceholder } from '@/src/services/TMDB/helpers';

const Images = ({ movieId }: { movieId: number }) => {
  const { data, loading, error } = useFetch(() =>
    TMDBService.getMovieImages(movieId)
  );

  if (error) {
    return <Box>Error</Box>;
  }

  if (loading) {
    return <Box>loading</Box>;
  }

  if (!data) {
    return <></>;
  }

  return (
    <Box className='flex flex-row flex-wrap justify-center gap-2 px-3'>
      {data.backdrops.map((item: any, index: number) => {
        if (item.vote_average > 2) return;

        return (
          <Box key={index} className='h-[200px] w-screen sm:w-[400]'>
            <Image
              source={{
                uri: getImageOrPlaceholder({
                  path: item.file_path as string,
                  size: 'w500',
                }),
              }}
              alt=''
              className='h-[200px] w-screen rounded-lg sm:w-[400]'
              resizeMode='cover'
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Images;
