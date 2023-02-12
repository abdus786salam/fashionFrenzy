import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/products/product.action';
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
     
    </div>
  )
}

export default HomePage