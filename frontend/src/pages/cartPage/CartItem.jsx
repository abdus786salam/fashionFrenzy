import { Box, Flex, HStack, Icon, Image, Text, useToast } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import QtyButton from './QtyButton'
import { deleteCartproduct, getAllCartData } from '../../redux/cart/cart.action'
import { useDispatch } from 'react-redux'

const CartItem = ({_id, product,quantity}) => {
  const toast = useToast()
  const dispatch=useDispatch()
  
  return (
    <Flex direction={{base:"column",lg:"row"}} p={2} boxShadow='base'>
        <HStack>
            <Image h="100" w='100'  src={product.url} alt={product.title}/>
           
            <Box>
            <Text fontWeight="medium" noOfLines={1}>{product.title}</Text>
            <Text color={'gray.600'} fontSize="sm" mr={5}  noOfLines={1}>
              {product.description}
            </Text>
            <Text fontWeight="medium">₹ {product.price}</Text>
            </Box>
        </HStack>
        <HStack>
         <QtyButton quantity={quantity} id={_id} />
         <Box as='button'
         onClick={()=>{
          deleteCartproduct(_id).then(res=>{
            dispatch(getAllCartData())
            console.log(res)
            toast({
              title: `product ${product.title} deleted from your cart`,
              status: "info",
              duration: 5000,
              position: "top",
              isClosable: true,
            })
          }).catch(err=>{
            console.log(err)
          })
         }}
         >
            <DeleteIcon boxSize={6} color="orange"  />
         </Box>
        </HStack>
    </Flex>
  )
}

export default CartItem