import { Box } from '../../ui/box';

import React from 'react';
import SingleCarousel, { SingleCarouselItemType } from './SingleCarousel';
import { Href, Link } from 'expo-router';
import { Heading } from '../../ui/heading';
import { Button, ButtonIcon, ButtonText } from '../../ui/button';
import { ArrowRightIcon } from '../../ui/icon';

type Props = {
  title: string;

  cta?: {
    title?: string;
    href: Href;
  };

  carouselItems: SingleCarouselItemType[];
};

const SingleCarouselWrapper = ({ carouselItems, title, cta }: Props) => {
  return (
    <Box className='mb-6'>
      <Box className='d-flex flex-row justify-center my-6 mx-3 md:mx-6 lg:mx-9'>
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
      <SingleCarousel data={carouselItems} />
    </Box>
  );
};

export default SingleCarouselWrapper;
