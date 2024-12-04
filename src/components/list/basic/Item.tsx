import { Link } from 'expo-router';
import { Box } from '../../ui/box';
import { Heading } from '../../ui/heading';
import { CalendarDaysIcon, FavouriteIcon, Icon } from '../../ui/icon';
import { Image } from '../../ui/image';
import { Text } from '../../ui/text';
import { BasicListItemType } from './BasicList';
import { formatDate, truncateString } from '@/src/utils/utils';

type Props = {
  item: BasicListItemType;
};

const Item = ({
  item: { title, overview, image, url, vote_average, release_date },
}: Props) => {
  return (
    <Box className='rounded-lg overflow-hidden bg-zinc-900 shadow-slate-200 w-72'>
      <Link href={url}>
        <Image
          alt={title}
          source={image}
          className='h-32 w-full opacity-80 bg-black'
        />
      </Link>

      <Box className='p-3'>
        <Link href={url}>
          <Heading size='lg' className='mb-2 -mt-1'>
            {title}
          </Heading>
        </Link>
        <Text size='sm' className='mb-3 text-zinc-500'>
          {truncateString(overview, 110)}
        </Text>

        <Box className='flex flex-row gap-2 items-center text-zinc-400'>
          <Icon
            as={FavouriteIcon}
            size='sm'
            className='text-red-700 fill-red-950'
          />
          <Text size='sm'>{vote_average.toFixed(1)} </Text>

          <Icon as={CalendarDaysIcon} size='xs' className='text-zinc-500' />
          <Text size='xs' className='text-zinc-500'>
            {formatDate(new Date(release_date as string))}{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
