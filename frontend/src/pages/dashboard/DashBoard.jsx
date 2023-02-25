import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersForAdmin, getAllProductsForAdmin, getAllusers } from "../../redux/admin/admin.action";

const DashBoard = () => {
  const dispatch=useDispatch()
  const {users,products,orders}=useSelector(store=>store.adminReducer)
  useEffect(()=>{
    dispatch(getAllusers())
    dispatch(getAllProductsForAdmin());
    dispatch(getAllOrdersForAdmin());
  },[dispatch])
  return (
    <Box>
      <Flex px={{base:1,md:5}} alignItems='center'>
       
        <Box px="5" py="3">
          <Heading as="h3" fontSize={"2xl"} textAlign='center' textTransform="uppercase">
            DashBoard
          </Heading>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 4 }}
            spacing={{ base: 5, md: 10 }}
            mt="10"
          >
            <Box shadow="md" borderWidth="1px" w={300} flex="1" p="5" bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
                 Customers
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
                {users.length}
              </Text>
            </Box>
            <Box shadow="md" borderWidth="1px" flex="1" p="5"  bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
                 Orders
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
               {orders.length}
              </Text>
            </Box>
            <Box shadow="md" borderWidth="1px" flex="1" p="5"  bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
               Total Products
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
                {products.length}
              </Text>
            </Box>
            <Box shadow="md" borderWidth="1px" flex="1" p="5"  bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
               Revenue
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
              ₹ 79
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashBoard;
