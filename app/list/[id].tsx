import { Box } from '@/src/components/ui/box';
import { Text } from '@/src/components/ui/text';
import { useLocalSearchParams } from 'expo-router';

export default function SingleMovieScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Box className='flex-1 p-4 bg-gray-100'>
      <Text className='text-lg font-bold'>Movie Details for ID: {id}</Text>
    </Box>
  );
}
