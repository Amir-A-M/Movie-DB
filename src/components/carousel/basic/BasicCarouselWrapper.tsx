import { Box } from '../../ui/box';

import React from 'react';
import BasicCarousel, { BasicCarouselItemType } from './BasicCarousel';
import { Href, Link } from 'expo-router';
import { Heading } from '../../ui/heading';
import { Button, ButtonIcon, ButtonText } from '../../ui/button';
import { ArrowRightIcon } from '../../ui/icon';
import { TMDBMovie, TMDBResponse } from '@/src/services/TMDB/types';
import { getTMDBImage } from '@/src/services/TMDB/helpers';

type Props = {
  title: string;

  cta?: {
    title?: string;
    href: Href;
  };

  carouselItems: BasicCarouselItemType[];
};

const BasicCarouselWrapper = ({ carouselItems, title, cta }: Props) => {
  return (
    <Box className='mb-6'>
      <Box className='d-flex flex-row justify-between mt-6 -mb-3 mx-3 md:mx-6 lg:mx-9'>
        <Heading size='2xl'>{title}</Heading>
        {cta && (
          <Link href={cta.href} className='me-2'>
            <Button variant='link' className='group'>
              <ButtonText>{cta.title || 'See All'}</ButtonText>
              <ButtonIcon
                as={ArrowRightIcon}
                className='transform transition-transform group-hover:translate-x-1'
              />
            </Button>
          </Link>
        )}
      </Box>
      <BasicCarousel data={carouselItems} />
    </Box>
  );
};

type normalizeCarouselDataType = {
  data: TMDBResponse<TMDBMovie>;
};

export const normalizeCarouselData = ({ data }: normalizeCarouselDataType) => {
  if (!data || !data.results) return [];

  return data.results.map(
    (movie) =>
      ({
        id: movie.id,
        title: movie.title || movie.name,
        image: movie.backdrop_path
          ? getTMDBImage({ size: 'w780', path: movie.backdrop_path })
          : null,
        url: `/movie/${movie.id}`,
      } as BasicCarouselItemType)
  );
};

export default BasicCarouselWrapper;
