import { ImageSourcePropType } from 'react-native';
import { CarouselItem } from './Item';
import { Box } from '../../ui/box';

import { DraggableFlatList } from '../../common/DraggableFlatList';

export type BasicCarouselItemType = {
  url: string;
  title: string;
  image: ImageSourcePropType;
};

type Props = {
  data: BasicCarouselItemType[];
};

const BasicCarousel = ({ data }: Props) => {
  return (
    <Box className='mt-6 ms-6 md:ms-9 lg:ms-12'>
      <Box className='-ms-3'>
        <DraggableFlatList
          data={data}
          renderItem={({
            item,
            index,
          }: {
            item: BasicCarouselItemType;
            index: number;
          }) => <CarouselItem item={item} index={index} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          className='cursor-grab active:cursor-grabbing'
        />
      </Box>
    </Box>
  );
};

export default BasicCarousel;
