import React from 'react'
import './Carousal.css'
import { Box, Flex } from '@chakra-ui/react'
import ImageContainer from './ImageContainer'
const Carousal = () => {
    const btnLeftCall = ()=>{
        
    }
    const btnRightCall = ()=>{

    }
  return (
   <div className='carousal-container'>
    <button className='image-carousal-btn-left' onClick={btnLeftCall}><p>&lt;</p></button>
    <button className='image-carousal-btn-right' onClick={btnRightCall}><p>&gt;</p></button>
    <div className='carousal-image-container'>

   <ImageContainer imageDetails='1' />
   <ImageContainer imageDetails='2' />
   <ImageContainer imageDetails='3' />
   <ImageContainer imageDetails='4' />
   <ImageContainer imageDetails='5' />
   <ImageContainer imageDetails='6' />
   <ImageContainer imageDetails='7' />
   <ImageContainer imageDetails='8' />
    </div>
   </div>
  )
}

export default Carousal