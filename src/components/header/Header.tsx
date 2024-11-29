import { Box } from '../ui/box';
import { Heading } from '../ui/heading';
import { Link } from 'expo-router';
import { Icon, SearchIcon } from '../ui/icon';

const Header = () => {
  return (
    <Box className='flex flex-row gap-4 items-center justify-between h-20 px-10 bg-zinc-900'>
      <Link href='/' asChild>
        <Heading size='2xl'>Movie DB</Heading>
      </Link>

      <Link
        href='/search'
        className='pt-2 p-2.5 rounded-md hover:bg-zinc-800 active:scale-95 transition-all group'
      >
        <Icon as={SearchIcon} />
      </Link>
    </Box>
  );
};

export default Header;
