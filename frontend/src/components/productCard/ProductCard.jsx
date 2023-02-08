import { Box, Button, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './ProductCard.css'
import { Link as ReactLink } from 'react-router-dom'

const productData={
  _id:"sjas",
  title:"Pape jeans",
  description: "jeans it is men",
  url: "https://www.jcrew.com/s7-img-facade/BF192_YD0801_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
  price:1000,
  product_type:"clothing",
  category: 'men',
  seller:""
}

const ProductCard = () => {
  return (
    
    <VStack boxShadow='md' pb='4' rounded='md' overflow='hidden' align={'stretch'}>
      <Box className="product-box">
        <Link as={ReactLink} to={'#'}>
        <Image
        zIndex={0}
        className="product-image"
       _hover={{ transform: "scale(1.05)", transformOrigin: "50% 50%" }}
       transition="transform .5s"
        src={productData.url} border='1px' alt={productData.title} />
        </Link>
        <Button
         className="hover-btn"
          //  display={'none'}
            bg='black'
            border={'1px'}
            // z-index= '25'
            borderRadius={'none'}
            _hover={{colorScheme:"blackAlpha"}}
          //  isDisabled={auth}
          // disabled={!auth}
            color='white'
            position={"absolute"}
            bottom="0"
            left="0"
            w="full"
            // onClick={() => dispatch(addToCartData(productData._id,userEmail)).then(res =>{
            //   toast({
            //     title: 'This item Added to your cart.',
            //     status: 'info',
            //     duration: 5000,
            //     position:"top",
            //     isClosable: true,
            //   })
            // })}
           
          >
            Add to Cart
          </Button>
      </Box>
      <VStack px='4' align={'stretch'}>
      <Text as="b">{productData.title}</Text>
      <Text color='red' fontSize={"sm"} textDecoration={"line-through"}>
          INR {productData.price+(productData.price*0.20)}
        </Text>
      <Text fontSize={"sm"}>
          INR {productData.price}
        </Text>
      </VStack>
    </VStack>

  )
}

export default ProductCard
