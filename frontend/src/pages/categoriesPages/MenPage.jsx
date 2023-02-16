import { Spinner } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import ProductPageComponent from '../../components/productPageComponent/ProductPageComponent'

const MenPage = () => {
  const { isLoading } = useSelector((store) => store.productReducer);
  return (
    <>
    {
      
    <ProductPageComponent />
    }
    </>
  )
}

export default MenPage