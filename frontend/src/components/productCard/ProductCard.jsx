import { Box, Button, Icon, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './ProductCard.css'
import { Link as ReactLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const productData={
  _id:"sjas",
  title:"Pape jeans",
  description: "jeans it is men",
  url: "https://www.jcrew.com/s7-img-facade/G8576_DM2238?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
  price:1000,
  product_type:"clothing",
  category: 'men',
  seller:""
}

const ProductCard = () => {
  const { user, isAuth } = useSelector((store) => store.authReducer);
  console.log(isAuth)
  return (
    
    <VStack boxShadow='md' pb='4' rounded='md' overflow='hidden' align={'stretch'}>
      <Box className="product-box" position={'relative'}>
        <Link as={ReactLink} to={`/${productData.category}/${productData._id}`}>
        <Image
        zIndex={0}
        className="product-image"
       _hover={{ transform: "scale(1.05)", transformOrigin: "50% 50%" }}
       transition="transform .5s"
        src={productData.url} alt={productData.title} />
        </Link>
        <Button
         className="hover-btn"
            bg={!isAuth?'black':'orange'}
            border={'1px'}
            zIndex= '25'
            borderRadius={'none'}
            _hover={{colorScheme:"blackAlpha"}}
            isDisabled={!isAuth}
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
             <Icon fontSize={"xl"} as={BsCart3} /> ADD TO CART
          </Button>
      </Box>
      <VStack px='4' align={'stretch'}>
      <Text as="b">{productData.title}</Text>
      <Text color='red' fontSize={"sm"} textDecoration={"line-through"}>
     PRICE ₹ {productData.price+(productData.price*0.20)}
        </Text>
      <Text fontSize={"sm"}>
     PRICE ₹ {productData.price}
        </Text>
      </VStack>
    </VStack>

  )
}

export default ProductCard
