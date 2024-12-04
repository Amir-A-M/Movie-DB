import React from 'react';
import { Pressable } from 'react-native';
import { Text } from '../../ui/text';
import { ArrowDownIcon, Icon } from '../../ui/icon';
import { Box } from '../../ui/box';

type Props = {
  handlePress: Function;
};

const LoadMore = ({ handlePress }: Props) => {
  return (
    <Box className='py-7 w-full -mx-1 flex flex-row justify-center items-end mb-6 -mt-40 h-40 bg-gradient-to-t from-[#111214] from-10% to-transparent '>
      <Pressable
        onPress={() => handlePress()}
        className='w-40 flex items-center gap-2 animate-bounce'
      >
        <Text size='xl' className='font-semibold'>
          Load more
        </Text>
        <Icon size='lg' className='font-semibold' as={ArrowDownIcon} />
      </Pressable>
    </Box>
  );
};

export default LoadMore;
