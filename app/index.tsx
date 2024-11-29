import BasicCarousel from '@/src/components/carousel/basic/BasicCarousel';
import Hero from '@/src/components/home/hero';
import { View } from 'react-native';

export default function Index() {
  return (
    <View className='h-full w-screen'>
      <Hero />
      <BasicCarousel data={data} />
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
