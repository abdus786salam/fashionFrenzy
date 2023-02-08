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
import React, { useState } from "react";
import PriceRangeSlider from "../../components/PriceRangeSlider";
import ProductCard from "../../components/productCard/ProductCard";

const MenPage = () => {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  console.log(priceRange);

  return (
    <Box>
      <Box textAlign={"center"} my={10}>
        <Heading as="h1">Men's products Page</Heading>
      </Box>
      <Flex direction={"row"} mx="5">
        <VStack align="stretch" flex="0.25" border="1px" p={2}>
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
        <VStack flex="1" border="1px solid red" p={2}>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
            gap="1rem"
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MenPage;
