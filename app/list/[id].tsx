import Header from '@/src/components/header/Header';
import BasicList from '@/src/components/list/basic/BasicList';
import { Box } from '@/src/components/ui/box';
import { Heading } from '@/src/components/ui/heading';
import { exampleMovieList } from '@/src/constants/sampleData';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

export default function SingleMovieScreen() {
  return (
    <ScrollView>
      <Header />

      <Box className='h-full p-5'>
        <Heading size='2xl' className='text-center my-5'>
          List Title
        </Heading>

        <BasicList items={exampleMovieList} />
      </Box>
    </ScrollView>
  );
}
