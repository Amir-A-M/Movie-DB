import { Box } from '@/src/components/ui/box';
import { Text } from '@/src/components/ui/text';
import { Image } from '../ui/image';
import { Heading } from '../ui/heading';
import { Input, InputField } from '../ui/input';
import { Button } from '../ui/button';
const bgImage = require('../../images/breaking-bad-1182023.png');

function Hero() {
  return (
    <Box className='h-[20rem] md:h-[26rem] bg-black bg-gradient-to-tr from-orange-950 to-yellow-800 d-flex justify-center px-6 sm:px-20 lg:px-40 relative m-2 sm:m-3 md:m-6 lg:m-9 rounded-lg overflow-hidden'>
      <Image
        source={bgImage}
        className='absolute inset-0 w-full h-full opacity-40'
      />
      <Box className='mt-14 md:mt-20 lg:mt-28 relative z-10'>
        <Heading size='3xl' bold className='mb-1 md:mb-3 lg:text-5xl'>
          Welcome to MDB
        </Heading>
        <Text size='lg' className='mb-6 lg:text-xl'>
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>

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
            Search
          </Button>
        </Input>
      </Box>
    </Box>
  );
}

export default Hero;
