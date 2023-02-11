import {
  Box,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PriceRangeSlider from "../../components/PriceRangeSlider";
import ProductCard from "../../components/productCard/ProductCard";
import { getAllCartData } from "../../redux/cart/cart.action";
import { getProductByCategory } from "../../redux/products/product.action";

const MenPage = () => {
  const { category } =useParams()
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const dispatch = useDispatch()
  const {data}=useSelector(store=>store.productReducer)
  console.log(data);
  useEffect(()=>{
    dispatch(getProductByCategory({category}))
    dispatch(getAllCartData())
  },[dispatch,category])
  
  // useEffect(()=>{
    
  // },[])
  return (
    <Box>
      <Box textAlign={"center"} my={10}>
        <Heading as="h1" textTransform={'capitalize'} >{category}'s products Page</Heading>
      </Box>
      <Flex direction={"row"} mx="5">
        <VStack align="stretch" flex="0.25" p={2}>
          <Text as="b">Filters</Text>
          <Divider />
          <Box>
            <Text as="b">Price</Text>
            <Box>
              <Text as="b" fontSize={"xs"}>
                Min ₹{priceRange[0]} - Max ₹{priceRange[1]}
              </Text>
            </Box>
            <PriceRangeSlider range={setPriceRange} />
          </Box>
          <Divider />
          <Box>
            <Text as="b">Categories</Text>
            <CheckboxGroup
              colorScheme="blue"
              defaultValue={["Shirt", "Jeans", "T-shirt", "Trouser"]}
            >
              <Stack spacing={[1, 5]}>
                <Checkbox value="shirt">Shirt</Checkbox>
                <Checkbox value="t-shirt">T-shirt</Checkbox>
                <Checkbox value="jeans">Jeans</Checkbox>
                <Checkbox value="trouser">Trouser</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
        </VStack>
        <VStack flex="1" p={2}>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
            gap="1rem"
          >
            {
              data?.map((item)=><ProductCard key={item._id} {...item} />)
            }
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MenPage;
