import * as React from 'react';
import { SingleCarouselItemType } from './SingleCarousel';
import { Image } from '../../ui/image';
import { Box } from '../../ui/box';
import { Heading } from '../../ui/heading';
import { Dimensions, Platform, View } from 'react-native';
import { Href, Link, router } from 'expo-router';
import { Pressable } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { StyleSheet } from 'nativewind';

export interface CarouselItemProps {
  item: SingleCarouselItemType;
  index: number;
  scrollX: SharedValue<number>;
}

const { width: screenWidth } = Dimensions.get('window');

export function CarouselItem({ item, index, scrollX }: CarouselItemProps) {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [-screenWidth * 0.25, 0, screenWidth * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const onPressHandler = () => {
    router.push(item.url as Href);
  };

  return (
    <Animated.View
      className='flex items-center justify-center'
      style={[styles.itemContainer, rnAnimatedStyle]}
    >
      <Pressable
        onPress={onPressHandler}
        className='relative h-[20rem] w-[70%] rounded-lg overflow-hidden'
      >
        <Image
          source={item.image}
          alt={item.title}
          className='w-full h-full bg-slate-700'
        />
        <Box className='absolute inset-0 z-10 flex justify-end p-5 bg-gradient-to-t from-[rgba(0_0_0/.3)] to-transparent'>
          <Heading size='xl'>{item.title}</Heading>
        </Box>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
});
