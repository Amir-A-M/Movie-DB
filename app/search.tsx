import Header from '@/src/components/header/Header';
import { Box } from '@/src/components/ui/box';
import { Button, ButtonText } from '@/src/components/ui/button';
import { Heading } from '@/src/components/ui/heading';
import { Input, InputField } from '@/src/components/ui/input';

export default function SearchScreen() {
  return (
    <Box className='h-full'>
      <Header />

      <Box className='w-full h-full flex justify-center items-center pb-28'>
        <Heading size='2xl' className='mb-4'>
          Search a Movies
        </Heading>

        <Input size='md' className='bg-white rounded-none border-none'>
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
    </Box>
  );
}
