import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Box } from '../../ui/box';
import { Dimensions } from 'react-native';
import { SingleCarouselItemType } from './SingleCarousel';

type Props = {
  items: SingleCarouselItemType[];
  scrollX: SharedValue<number>;
};

const { width: screenWidth } = Dimensions.get('window');

const Pagination = ({ items, scrollX }: Props) => {
  return (
    <Box className='flex flex-row gap-3 justify-center mt-6 mb-2'>
      {items.map((_, index) => {
        const pgAnimatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [8, 20, 8],
            Extrapolation.CLAMP
          );

          const opacity = interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [0.2, 1, 0.2],
            Extrapolation.CLAMP
          );

          return {
            width: dotWidth,
            opacity,
          };
        });

        return (
          <Animated.View
            key={index}
            style={[
              pgAnimatedStyle,
              {
                width: 10,
                height: 10,
                borderRadius: 100,
                backgroundColor: '#fff',
              },
            ]}
          />
        );
      })}
    </Box>
  );
};

export default Pagination;
