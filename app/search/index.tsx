import Header from '@/src/components/header/Header';
import SearchForm from '@/src/components/pages/search/SearchForm';
import { Box } from '@/src/components/ui/box';
import { Heading } from '@/src/components/ui/heading';

export default function SearchScreen() {
  return (
    <Box className='h-full'>
      <Header />

      <Box className='w-full h-full flex justify-center items-center pb-28'>
        <Heading size='2xl' className='mb-4'>
          Search a Movies
        </Heading>

        <SearchForm />
      </Box>
    </Box>
  );
}
