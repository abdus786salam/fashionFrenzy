import { Box, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const OrderSummery = ({subTotalAmt}) => {
  const totalAmount=subTotalAmt+Math.round(subTotalAmt*0.20)
  return (
    <Box bg='gray.100' pt='10' borderRadius={10}>
        <Heading as='h4' fontSize={'xl'} textDecoration='underline' textUnderlineOffset="7px" textAlign='center' fontWeight="medium">Order Summery</Heading>
      
      <VStack align="stretch" p='5'>
        <HStack>
        <Text >SubTotal</Text>
        <Spacer/>
        <Text as='b'>₹ {subTotalAmt}</Text>
        </HStack>
        <HStack>
        <Text >Shipping + Tax</Text>
        <Spacer/>
        <Text >₹ {Math.round(subTotalAmt*0.20)}</Text>
        </HStack>
        <HStack>
        <Text as='b' fontSize='xl'>Total</Text>
        <Spacer/>
        <Text as='b' fontSize='xl'>₹ {totalAmount}</Text>
        </HStack>
      </VStack>
    </Box>
  )
}

export default OrderSummery