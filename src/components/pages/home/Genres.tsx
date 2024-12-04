import React from 'react';
import { Href, Link } from 'expo-router';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { Box } from '../../ui/box';
import { Text } from '../../ui/text';
import { TMDBGenre } from '@/src/services/TMDB/types';
import { Heading } from '../../ui/heading';

const Genres = () => {
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
        {data.genres.map(({ name, id }: TMDBGenre) => (
          <Link
            href={`search/results/?with_genres=${id}&sort_by=popularity.desc&title=${name}`}
            key={id}
            className='border border-zinc-700 px-3 rounded-lg transition-all hover:bg-zinc-800 hover:scale-105'
          >
            <Text>{name}</Text>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Genres;
