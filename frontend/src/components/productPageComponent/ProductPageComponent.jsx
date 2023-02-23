import {
  Box,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Heading,
  Icon,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PriceRangeSlider from "../../components/PriceRangeSlider";
import ProductCard from "../../components/productCard/ProductCard";
import { getAllProductCategories } from "../../redux/productFilter/productFilter.action";
import { getProductByCategory } from "../../redux/products/product.action";

const ProductPageComponent = ({ category = "men" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("sub_type");
  const [filterProducts, setFilteredProducts] = useState(initialCategory || []);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.productReducer);
  const { subCategory,isFilterLoading } = useSelector((store) => store.filterReducer);

  const handleFilterCategory = (e) => {
    const newFilteredProduct = [...filterProducts];
    if (newFilteredProduct.includes(e.target.value)) {
      newFilteredProduct.splice(newFilteredProduct.indexOf(e.target.value), 1);
    } else {
      newFilteredProduct.push(e.target.value);
    }

    setFilteredProducts(newFilteredProduct);
  };

  useEffect(() => {
    dispatch(getAllProductCategories({ category: category }));
  }, [category, dispatch]);

  useEffect(() => {
    let params = {};
    params.category = category;
    params.sub_type = filterProducts;
    // params.price =  priceRange;
    setSearchParams(params);
    //   params.price={$lte:priceRange[1]}
    //   {min:,max:{$lte:priceRange[1]} }

    dispatch(getProductByCategory(params));
  }, [filterProducts, setSearchParams, category, dispatch, priceRange]);

  return (
    <>
    
              
            <Box>
      <Box textAlign={"center"} my={10}>
        <Heading as="h1" textTransform={"capitalize"}>
          {category}'s products Page
        </Heading>
      </Box>
      <Flex direction={"row"} mx="5">
        <VStack align="stretch" flex="0.25" p={2}>
          <Text fontSize={"lg"} as="b">
          <Icon as={BiFilterAlt} mr='2' />
            Filters
          </Text>
          <Divider />
          <Box>
            <Text mt={{ base: 2, md: 5 }} fontSize={"lg"} as="b">
              Price
            </Text>
            <Box>
              <Text as="b" fontSize={"xs"}>
                Min ₹{priceRange[0]} - Max ₹{priceRange[1]}
              </Text>
            </Box>
            <PriceRangeSlider range={setPriceRange} />
          </Box>
          <Divider />
          <Box>
            <Text fontSize={"lg"} as="b">
              Categories
            </Text>
            <CheckboxGroup colorScheme="orange">
              <Stack mt={{ base: 2, md: 5 }}>
                {
                subCategory?.map((item) => (
                  <Checkbox
                    size={"lg"}
                    disabled={isLoading}
                    textTransform={"capitalize"}
                    key={item._id + item.sub_type}
                    value={item.sub_type}
                    onChange={handleFilterCategory}
                    isChecked={filterProducts.includes(item.sub_type)}
                  >
                    {item.sub_type}
                  </Checkbox>
                ))}
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
              isLoading?<Spinner 
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange"
              h='100px'
              w='100px'
            />:
            data?.map((item) => (
              <ProductCard key={item._id} {...item} />
            ))}
            
            
          </Box>
        </VStack>
      </Flex>
    </Box>
            
             
    </>
   
  );
};

export default ProductPageComponent;
