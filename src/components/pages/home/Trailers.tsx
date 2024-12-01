import useFetch from '@/src/Hook/useFetch';
import { TMDBService } from '@/src/services/TMDB';
import { Box } from '../../ui/box';
import SingleCarouselWrapper from '../../carousel/single/SingleCarouselWrapper';

const Trailers = () => {
  const itemLimit = 7;

  const { data, loading, error } = useFetch(() =>
    TMDBService.getTrailers({ limit: itemLimit })
  );

  if (error) {
    return <Box>Error</Box>;
  }

  if (loading || !data) {
    return <Box className='h-[10rem]'></Box>;
  }

  return <SingleCarouselWrapper title='Trailers' carouselItems={data} />;
};

export default Trailers;
