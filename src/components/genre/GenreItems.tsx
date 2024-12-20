import React from 'react';
import { router } from 'expo-router';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { TMDBGenre } from '@/src/services/TMDB/types';
import { Pressable } from 'react-native-gesture-handler';
import { Text } from '../ui/text';

type Props = {
  GenreItems: TMDBGenre[];
};

const GenreItems = ({ GenreItems }: Props) => {
  function handlePress({ id, name }: any) {
    router.push(
      `search/results/?with_genres=${id}&sort_by=popularity.desc&title=${name}`
    );
  }

  return (
    <>
      {GenreItems.map(({ name, id }: TMDBGenre) => (
        <Pressable
          onPress={() => handlePress({ id, name })}
          key={id}
          className='border border-zinc-700 px-3 rounded-lg transition-all hover:bg-zinc-800 hover:scale-105'
        >
          <Text>{name}</Text>
        </Pressable>
      ))}
    </>
  );
};

export default GenreItems;
