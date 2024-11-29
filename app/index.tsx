import BasicCarousel from '@/src/components/carousel/basic/BasicCarousel';
import BasicCarouselWrapper from '@/src/components/carousel/basic/BasicCarouselWrapper';
import SingleCarouselWrapper from '@/src/components/carousel/single/SingleCarouselWrapper';
import Header from '@/src/components/header/Header';
import Hero from '@/src/components/pages/home/hero';
import { Box } from '@/src/components/ui/box';
import { Href } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <ScrollView>
      <Header />

      <Box className='h-full w-full'>
        <Hero />

        <BasicCarouselWrapper
          title='Trending'
          carouselItems={data}
          cta={{
            href: './' as Href,
          }}
        />

        <SingleCarouselWrapper title='Trailers' carouselItems={data} />

        <BasicCarouselWrapper
          title='Latest Releases'
          carouselItems={data}
          cta={{
            title: 'See all releases',
            href: './' as Href,
          }}
        />

        <BasicCarouselWrapper title="What's Popular" carouselItems={data} />
      </Box>
    </ScrollView>
  );
}

const data = [
  {
    url: '/list/1',
    title: 'Hello',
    image: require('@/assets/images/slide-images/purple-0.png'),
  },
  {
    url: '/list/1',
    title: 'Title for p1',
    image: require('@/assets/images/slide-images/purple-1.png'),
  },
  {
    url: '/list/1',
    title: 'Po 2 text',
    image: require('@/assets/images/slide-images/purple-2.png'),
  },
  {
    url: '/list/1',
    title: 'Title',
    image: require('@/assets/images/slide-images/purple-3.png'),
  },
  {
    url: '/list/1',
    title: 'Title for p1',
    image: require('@/assets/images/slide-images/purple-1.png'),
  },
  {
    url: '/list/1',
    title: 'Po 2 text',
    image: require('@/assets/images/slide-images/purple-2.png'),
  },
  {
    url: '/list/1',
    title: 'Title',
    image: require('@/assets/images/slide-images/purple-3.png'),
  },
  {
    url: '/list/1',
    title: 'Title for p1',
    image: require('@/assets/images/slide-images/purple-1.png'),
  },
  {
    url: '/list/1',
    title: 'Po 2 text',
    image: require('@/assets/images/slide-images/purple-2.png'),
  },
  {
    url: '/list/1',
    title: 'Title',
    image: require('@/assets/images/slide-images/purple-3.png'),
  },
];
