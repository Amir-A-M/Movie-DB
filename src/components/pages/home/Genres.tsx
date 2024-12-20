import React from 'react';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { Box } from '../../ui/box';
import { TMDBGenre } from '@/src/services/TMDB/types';
import { Heading } from '../../ui/heading';
import GenreItems from '../../genre/GenreItems';

type Props = {
  GenreList?: TMDBGenre[];
};

const Genres = ({ GenreList }: Props) => {
  const { data, loading, error } = useFetch(() => TMDBService.getGenres());

  if (error) {
    return <Box>Error</Box>;
  }

  if (!data) return;

  return (
    <Box className='sm:m-3 md:m-6 lg:m-9 flex items-center'>
      <Heading size='2xl' className='text-center'>
        Genres
      </Heading>

      <Box className='mt-5 mb-3 flex flex-row flex-wrap justify-center gap-3 max-w-[800px]'>
        <GenreItems GenreItems={data.genres} />
      </Box>
    </Box>
  );
};

export default Genres;
