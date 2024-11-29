import { Box } from '@/src/components/ui/box';
import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { useRouter } from 'expo-router';

export default function ListScreen() {
  const router = useRouter();

  return (
    <Box className='flex-1 p-4 bg-white'>
      <Text className='text-lg font-bold mb-4'>Movie List</Text>
      <Button
        onPress={() => router.push('/list/1')}
        className='bg-blue-500 px-4 py-2 rounded-lg'
      >
        <Text className='text-white'>Go to Movie Details</Text>
      </Button>
    </Box>
  );
}
