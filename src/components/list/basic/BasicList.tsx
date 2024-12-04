import { ImageSourcePropType } from 'react-native';
import { Box } from '../../ui/box';
import Item from './Item';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export type BasicListItemType = {
  url: string;
  title: string;
  overview: string;
  image: ImageSourcePropType;
  vote_average: Float;

  release_date: string;
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
