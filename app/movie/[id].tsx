import Header from '@/src/components/header/Header';
import { Box } from '@/src/components/ui/box';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { useLocalSearchParams } from 'expo-router';
import { TMDBMovieDetail } from '@/src/services/TMDB/types';
import { ScrollView } from 'react-native-gesture-handler';
import Hero from '@/src/components/pages/singleMovie/Hero';
import Images from '@/src/components/pages/singleMovie/Images';

export default function MovieScreen() {
  const { id: userId } = useLocalSearchParams();

  const { data, loading, error } = useFetch<TMDBMovieDetail>(() =>
    TMDBService.getMovieDetails(Number(userId))
  );

  if (error) {
    return <Box>Error</Box>;
  }

  if (loading) return <Box>Loading</Box>;
  if (!data) return <Box>Not Fund</Box>;

  return (
    <ScrollView>
      <Box className='h-full bg-zinc-900 text-white'>
        <Header />
        <Hero data={data} />
        <Images movieId={data.id} />
      </Box>
    </ScrollView>
  );
}
