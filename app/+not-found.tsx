import { Box } from '@/src/components/ui/box';
import { Text } from '@/src/components/ui/text';

export default function ErrorScreen() {
  return (
    <Box className='flex-1 justify-center items-center'>
      <Text className='text-lg font-bold text-red-600'>Page Not Found</Text>
    </Box>
  );
}
