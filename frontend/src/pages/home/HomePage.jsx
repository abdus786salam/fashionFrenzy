import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/products/product.action';
import { cardDetailMen, cardDetailWomen } from './carousalContent';
import CategoryCarousal from './CategoryCarousal';
import ImageCarousalBox from './ImageCarousalBox';

const HomePage = () => {
  const dispatch = useDispatch()
  const data=useSelector(store=>store.productReducer)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <div>
      <ImageCarousalBox />
      <Box p='5' my={10}>
        <Heading textAlign={'center'} mb='10' fontSize={'4xl'} as='h3'>Exclusive Collection For Men</Heading>
      <CategoryCarousal cardDetail={cardDetailMen} />
      </Box>
      <Box p='5' my={10}>
        <Heading textAlign={'center'} mb='10' fontSize={'4xl'} as='h3'>Exclusive Collection For Women</Heading>
      <CategoryCarousal cardDetail={cardDetailWomen} />
      </Box>
     
    </div>
  )
}

export default HomePage