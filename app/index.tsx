import BasicCarousel from '@/src/components/carousel/basic/BasicCarousel';
import BasicCarouselWrapper from '@/src/components/carousel/basic/BasicCarouselWrapper';
import SingleCarouselWrapper from '@/src/components/carousel/single/SingleCarouselWrapper';
import Header from '@/src/components/header/Header';
import Hero from '@/src/components/pages/home/hero';
import Popular from '@/src/components/pages/home/Popular';
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
        <Popular />
        <Upcoming />
      </Box>
    </ScrollView>
  );
}
