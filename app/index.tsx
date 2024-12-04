import Header from '@/src/components/header/Header';
import Genres from '@/src/components/pages/home/Genres';
import Hero from '@/src/components/pages/home/hero';
import Popular from '@/src/components/pages/home/Popular';
import Trailers from '@/src/components/pages/home/Trailers';
import Trending from '@/src/components/pages/home/Trending';
import Upcoming from '@/src/components/pages/home/Upcoming';
import { Box } from '@/src/components/ui/box';
import { ScrollView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <ScrollView>
      <Header />

      <Box className='h-full w-full'>
        <Hero />

        <Trending />
        <Trailers />
        <Genres />
        <Popular />
        <Upcoming />
      </Box>
    </ScrollView>
  );
}
