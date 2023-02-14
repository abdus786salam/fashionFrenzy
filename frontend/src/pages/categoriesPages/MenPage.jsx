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
import { useParams, useSearchParams } from "react-router-dom";
import PriceRangeSlider from "../../components/PriceRangeSlider";
import ProductCard from "../../components/productCard/ProductCard";
import { getProductByCategory } from "../../redux/products/product.action";

const MenPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const initialCategory= searchParams.getAll("sub_type")
    console.log("search",searchParams)

  const [filterProducts,setFilteredProducts] = useState(initialCategory|| [])
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const dispatch = useDispatch();
  const { data, subCategory } = useSelector((store) => store.productReducer);
 

  const handleFilterCategory=(e) =>{
    const newFilteredProduct =[...filterProducts]
    if(newFilteredProduct.includes(e.target.value)){
      newFilteredProduct.splice(newFilteredProduct.indexOf(e.target.value))
    }else{
      newFilteredProduct.push(e.target.value)
    }

    setFilteredProducts(newFilteredProduct)
  }

  console.log(filterProducts);

  useEffect(() => {
    dispatch(getProductByCategory({ category }));
  }, [dispatch, category]);

  useEffect(()=>{
    let params = {};
    params.sub_type = filterProducts;
    // sort && (params.sort = sort);
    setSearchParams(params)
  },[filterProducts, setSearchParams])

  return (
    <Box>
      <Box textAlign={"center"} my={10}>
        <Heading as="h1" textTransform={"capitalize"}>
          {category}'s products Page
        </Heading>
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
            <CheckboxGroup colorScheme="blue">
              <Stack >
                {subCategory?.map((item) => (
                  <Checkbox
                    textTransform={"capitalize"}
                    key={item._id + item.sub_type}
                    value={item.sub_type}
                    onChange={handleFilterCategory}
                    checked={filterProducts.includes(item.sub_type)}
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
            {data?.map((item) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MenPage;
