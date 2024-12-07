import Header from '@/src/components/header/Header';
import BasicList, {
  BasicListItemType,
} from '@/src/components/list/basic/BasicList';
import LoadMore from '@/src/components/list/basic/LoadMore';
import { Box } from '@/src/components/ui/box';
import { Heading } from '@/src/components/ui/heading';
import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { getTMDBImage } from '@/src/services/TMDB/helpers';
import { TMDBMovie, TMDBResponse } from '@/src/services/TMDB/types';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView } from 'react-native-gesture-handler';

export default function ResultScreen() {
  const [listData, setListData] = useState<BasicListItemType[]>([]);
  const [totalPages, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const { title = 'Results', isSearch, ...search } = useLocalSearchParams();
  const searchParams = { page: page.toString(), ...search };

  const { data, loading, error } = useFetch(
    () =>
      isSearch
        ? TMDBService.SearchMovies(searchParams)
        : TMDBService.DiscoverMovies(searchParams),
    [page]
  );

  useEffect(() => {
    if (data) {
      setListData((prevListData) => [
        ...prevListData,
        ...normalizeListData({ data }),
      ]);
      setTotalPage(data.total_pages);
    }
  }, [data]);

  if (error) {
    return <Box>Error</Box>;
  }

  if (!loading && listData.length === 0) {
    return <Box>Ahh. No results found :(</Box>;
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <ScrollView>
      <Header />

      <Box className='h-full p-5'>
        <Heading size='2xl' className='text-center my-5'>
          {title}
        </Heading>

        <BasicList items={listData} />

        {listData && page < totalPages && (
          <LoadMore handlePress={handleLoadMore} />
        )}
      </Box>
    </ScrollView>
  );
}

type normalizeListDataType = {
  data: TMDBResponse<TMDBMovie>;
};

export const normalizeListData = ({ data }: normalizeListDataType) => {
  if (!data || !data.results) return [];

  return data.results.map(
    (movie) =>
      ({
        id: movie.id,
        url: `/movie/${movie.id}`,
        title: movie.title || movie.name,
        overview: movie.overview,
        image: movie.backdrop_path
          ? getTMDBImage({ size: 'w780', path: movie.backdrop_path })
          : require('@/assets/images/placeholders/empty.png'),
        vote_average: movie.vote_average,

        release_date: movie.release_date,
      } as BasicListItemType)
  );
};
