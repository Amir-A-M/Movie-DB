import { Box } from '@/src/components/ui/box';
import { Heading } from '@/src/components/ui/heading';
import { Text } from '@/src/components/ui/text';
import { Button, ButtonText } from '@/src/components/ui/button';
import {
  CalendarDaysIcon,
  FavouriteIcon,
  Icon,
} from '@/src/components/ui/icon';
import { Link } from 'expo-router';
import { getImageOrPlaceholder } from '@/src/services/TMDB/helpers';
import { TMDBMovieDetail } from '@/src/services/TMDB/types';
import GenreItems from '@/src/components/genre/GenreItems';
import { formatDate } from '@/src/utils/utils';
import { Image } from 'react-native';

const Hero = ({ data }: { data: TMDBMovieDetail }) => {
  return (
    <Box className='p-5 flex md:flex-row gap-4 md:gap-6 w-[1200px] max-w-full mx-auto'>
      <Box className='w-full md:w-[280px] h-[370px] flex items-center overflow-hidden'>
        <Image
          source={{
            uri: getImageOrPlaceholder({
              path: data.poster_path,
              size: 'w780',
            }),
          }}
          alt={data.title}
          className='w-full h-full max-w-[280px] rounded-xl '
        />
      </Box>

      <Box className='mb-4 flex items-center md:items-start gap-2'>
        <Heading size='2xl' className='text-center md:text-start font-bold'>
          {data.title}
        </Heading>

        <Box className='flex flex-row flex-wrap justify-center md:hidden gap-3 mt-0.5'>
          <GenreItems GenreItems={data.genres} />
        </Box>

        <Box className='flex flex-row justify-center md:justify-start gap-2 items-center text-zinc-400'>
          <Icon
            as={FavouriteIcon}
            size='sm'
            className='text-red-700 fill-red-950'
          />
          <Text size='sm'>{data.vote_average.toFixed(1)} </Text>

          <Icon as={CalendarDaysIcon} size='xs' className='text-zinc-500' />
          <Text size='xs' className='text-zinc-500'>
            {formatDate(new Date(data.release_date as string))}{' '}
          </Text>
        </Box>

        <Text className='mx-auto max-w-[600px] text-center md:text-start'>
          {data.overview}
        </Text>

        <Box className='flex-row flex-wrap justify-center md:justify-start hidden md:flex gap-3 mt-0.5'>
          <GenreItems GenreItems={data.genres} />
        </Box>

        <Button
          size='md'
          variant='solid'
          action='secondary'
          className='bg-slate-200 w-44 mt-4'
        >
          <ButtonText>
            <Link
              href={`https://www.imdb.com/title/${data.imdb_id}/`}
              target='_blank'
            >
              Visit in IMDB ↗
            </Link>
          </ButtonText>
        </Button>

        <Heading size='md' className='mt-10 text-zinc-300'>
          Production Companies
        </Heading>
        <Box className='flex flex-row flex-wrap justify-center md:justify-start gap-2'>
          {data.production_companies.map((item) => (
            <Box key={item.id} className='h-20 w-[154]'>
              <Image
                source={{
                  uri: getImageOrPlaceholder({
                    path: item.logo_path as string,
                    size: 'w154',
                  }),
                }}
                alt={item.name}
                className='h-16'
                resizeMode='contain'
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
