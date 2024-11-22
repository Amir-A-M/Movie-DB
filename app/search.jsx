import { Box } from '@/src/components/ui/box';
import { Input } from '@/src/components/ui/input';
import { Text } from '@/src/components/ui/text';

export default function SearchScreen() {
  return (
    <Box className='flex-1 p-4 bg-white'>
      <Text className='text-lg font-bold mb-4'>Search Movies</Text>
      <Input
        className='border rounded-lg p-2'
        placeholder='Search for a movie...'
      />
    </Box>
  );
}
