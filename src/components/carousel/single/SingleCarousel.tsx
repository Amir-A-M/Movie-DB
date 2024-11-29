import {
  ImageSourcePropType,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import { CarouselItem } from './Item';
import { Box } from '../../ui/box';

import { LogBox } from '@/src/utils/logBox';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useRef, useState } from 'react';
import Pagination from './Pagination';

export type SingleCarouselItemType = {
  url: string;
  title: string;
  image: ImageSourcePropType;
};

type Props = {
  data: SingleCarouselItemType[];
};

LogBox.ignoreLogs([
  'Warning: findDOMNode is deprecated and will be removed in the next major release.',
]);

const SingleCarousel = ({ data }: Props) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <Box>
      <Animated.FlatList
        data={data}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
      />

      <Pagination items={data} scrollX={scrollX} />
    </Box>
  );
};

export default SingleCarousel;
