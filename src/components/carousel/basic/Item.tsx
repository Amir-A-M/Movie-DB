import * as React from 'react';
import { BasicCarouselItemType } from './BasicCarousel';
import { Image } from '../../ui/image';
import { Box } from '../../ui/box';
import { Heading } from '../../ui/heading';
import { Platform, View } from 'react-native';
import { Href, Link, router } from 'expo-router';
import { Pressable } from 'react-native-gesture-handler';

export interface CarouselItemProps {
  item: BasicCarouselItemType;
  index: number;
}

const itemWidth = 288; // px
const spacing = 24; // Spacing between items

export function CarouselItem({ item, index }: CarouselItemProps) {
  const onPressHandler = () => {
    router.push(item.url as Href);
  };

  return (
    <View className='flex items-center'>
      {Platform.OS === 'web' ? (
        <a
          href={item.url}
          style={{ marginRight: spacing, width: itemWidth }}
          className='relative h-[20rem] rounded-lg overflow-hidden select-none [user-drag:none]'
          draggable='false'
        >
          <Image
            source={item.image}
            alt={item.title}
            className='w-full h-full bg-slate-700'
          />
          <Box className='absolute inset-0 z-10 flex justify-end p-5 bg-gradient-to-t from-[rgba(0_0_0/.3)] to-transparent'>
            <Heading size='xl'>{item.title}</Heading>
          </Box>
        </a>
      ) : (
        <Pressable
          onPress={onPressHandler}
          style={{ marginRight: spacing, width: itemWidth }}
          className='relative h-[20rem] rounded-lg overflow-hidden'
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
      )}
    </View>
  );
}
