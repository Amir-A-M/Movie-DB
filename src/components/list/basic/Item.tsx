import { Link } from 'expo-router';
import { Box } from '../../ui/box';
import { Heading } from '../../ui/heading';
import { FavouriteIcon, Icon } from '../../ui/icon';
import { Image } from '../../ui/image';
import { Text } from '../../ui/text';
import { BasicListItemType } from './BasicList';

type Props = {
  item: BasicListItemType;
};

const Item = ({ item: { title, image, url } }: Props) => {
  return (
    <Link
      href={url}
      className='rounded-lg overflow-hidden bg-zinc-900 shadow-slate-200 w-52'
    >
      <Image
        alt={title}
        source={image}
        className='h-32 w-full opacity-80 bg-black'
      />

      <Box className='p-3'>
        <Text size='xs' className='flex flex-row gap-2 items-center -mt-6 mb-1'>
          <Icon
            as={FavouriteIcon}
            size='xs'
            className='text-red-700 fill-red-950'
          />
          8.2
        </Text>
        <Heading size='lg' className='mb-2'>
          {title}
        </Heading>
        <Text size='sm'>Nov 28, 2024</Text>
      </Box>
    </Link>
  );
};

export default Item;
