import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useScrollViewOffset,
  useSharedValue,
} from 'react-native-reanimated';
import { useRef } from 'react';
import CarouselItem from './CarouselItem';

export const items = [
  {
    id: 'item-1',
    title: 'Item 1',
    img: require('../../../assets/images/slide-images/purple-0.png'),
  },
  {
    id: 'item-2',
    title: 'Item 2',
    img: require('../../../assets/images/slide-images/purple-1.png'),
  },
  // Add more items as needed
];

export default function MovieCarousel() {
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });
  return (
    <View className='w-full overflow-hidden my-4'>
      <Animated.FlatList
        horizontal
        onScroll={onScrollHandler}
        data={items}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          return <CarouselItem item={item} index={index} scrollX={scrollX} />;
        }}
      />
    </View>
  );
}
