import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Link,
} from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { images } from '../../images';
import { cards } from './carousalContent';

const settings = {
//   dots: true,
  arrows: false,
  infinite: true,
  autoplay:false,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function CategoryCarousal({cardDetail=[]}) {
  const navigate=useNavigate()
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  

  return (
    <Box
      position={'relative'}
      boxSize='full'
      overflow={'hidden'}>
      
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        _hover={{bg:'gray'}}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        _hover={{bg:'gray'}}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cardDetail?.map((card, index) => (
          
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container  height="250px" color='blackAlpha.700' position="relative">
            <Link as={ReactLink} to={`${card.path}`}>
              <Stack
                // spacing={6}
                w={'full'}
                // maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Text align={'center'} as='ins' fontSize={'2xl'}>
                  {card.title}
                </Text>
              </Stack>
              </Link>
            </Container>
          </Box>
         
        ))}
      </Slider>
    </Box>
  );
}