// https://gist.github.com/nandorojo/92e7301a49a8b9575bb24b3b1ddc19bf
import { useDraggableScroll } from '@/src/Hook/useDraggableScroll';
import React, { ComponentProps } from 'react';
import { FlatList } from 'react-native';

export const DraggableFlatList = React.forwardRef<
  FlatList,
  ComponentProps<typeof FlatList<any>>
>(function DraggableFlatList(props, ref) {
  const { refs } = useDraggableScroll<FlatList>({
    outerRef: ref,
    cursor: 'grab',
  });

  return <FlatList ref={refs} horizontal {...props} />;
});
