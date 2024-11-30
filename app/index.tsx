import BasicCarousel from '@/src/components/carousel/basic/BasicCarousel';
import BasicCarouselWrapper from '@/src/components/carousel/basic/BasicCarouselWrapper';
import SingleCarouselWrapper from '@/src/components/carousel/single/SingleCarouselWrapper';
import Header from '@/src/components/header/Header';
import Hero from '@/src/components/pages/home/hero';
import Trending from '@/src/components/pages/home/Trending';
import { Box } from '@/src/components/ui/box';
import { exampleMovieList } from '@/src/constants/sampleData';
import { Href } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <ScrollView>
      <Header />

      <Box className='h-full w-full'>
        <Hero />

        <Trending />

        {/* <SingleCarouselWrapper
          title='Trailers'
          carouselItems={exampleMovieList}
        />

        <BasicCarouselWrapper
          title='Latest Releases'
          carouselItems={exampleMovieList}
          cta={{
            title: 'See all releases',
            href: './' as Href,
          }}
        />

        <BasicCarouselWrapper
          title="What's Popular"
          carouselItems={exampleMovieList}
        /> */}
      </Box>
    </ScrollView>
  );
}
