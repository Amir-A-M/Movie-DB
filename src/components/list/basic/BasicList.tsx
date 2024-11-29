import { ImageSourcePropType } from 'react-native';
import { Box } from '../../ui/box';
import Item from './Item';

export type BasicListItemType = {
  url: string;
  title: string;
  image: ImageSourcePropType;
};

type Props = {
  items: BasicListItemType[];
};

const BasicList = ({ items }: Props) => {
  return (
    <Box className='flex flex-row gap-6 flex-wrap justify-center'>
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </Box>
  );
};

export default BasicList;
