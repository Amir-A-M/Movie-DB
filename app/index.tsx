import BasicCarousel from '@/src/components/carousel/basic/BasicCarousel';
import BasicCarouselWrapper from '@/src/components/carousel/basic/BasicCarouselWrapper';
import Hero from '@/src/components/home/hero';
import { Href } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  return (
    <View className='h-full w-screen'>
      <Hero />
      <BasicCarouselWrapper
        title='Latest Releases'
        carouselItems={data}
        cta={{
          title: 'See all releases',
          href: './' as Href,
        }}
      />
    </View>
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
