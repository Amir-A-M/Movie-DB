import { Box } from '@/src/components/ui/box';
import { Button, ButtonText } from '@/src/components/ui/button';
import { Input, InputField } from '@/src/components/ui/input';
import { Text } from '@/src/components/ui/text';

export default function SearchScreen() {
  return (
    <Box className='flex-1 p-4 bg-white'>
      <Text className='text-lg font-bold mb-4'>Search Movies</Text>
      <Input size='md' className='bg-white max-w-80 rounded-none border-none'>
        <InputField
          placeholder='Search for a Movie...'
          className='min-w-7 text-black'
        />
        <Button
          variant='solid'
          action='primary'
          className='rounded-none border-none'
        >
          <ButtonText>Search</ButtonText>
        </Button>
      </Input>
    </Box>
  );
}
