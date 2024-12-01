import * as React from 'react';
import { SingleCarouselItemType } from './SingleCarousel';
import { Dimensions, Platform } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { StyleSheet } from 'nativewind';
import WebView from 'react-native-webview';

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

  const url = `https://www.youtube.com/embed/${item.key}`; // sqoOzGMqCQU

  return (
    <Animated.View
      className='flex items-center justify-center'
      style={[styles.itemContainer, rnAnimatedStyle]}
    >
      {Platform.OS === 'web' ? (
        <iframe
          id='player'
          width='640'
          height='390'
          src={url}
          style={{
            position: 'relative',
            width: '70%',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        ></iframe>
      ) : (
        <WebView
          source={{ uri: url }}
          allowsFullscreenVideo
          style={{
            height: 320,
            width: '70%',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        />
      )}
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
