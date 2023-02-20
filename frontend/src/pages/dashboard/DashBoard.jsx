import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const DashBoard = () => {
  return (
    <Box>
      {/* dashboard navbar */}
      <Flex
        zIndex={5}
        py="3"
        px="10"
        h="60px"
        bg="orange"
        position="sticky"
        top="0"
        justifyContent={"space-between"}
        display={{ base: "none", lg: "flex" }}
        border="1px"
      ></Flex>
      {/* dashboard body */}
      <Flex px={{base:1,md:5}}>
        <Sidebar />
        <Box border="1px solid blue" w="80%" px="5" py="3">
          <Heading as="h3" fontSize={"md"} textTransform="uppercase">
            DashBoard
          </Heading>
          <SimpleGrid
            columns={{ sm: 2, md: 3, lg: 4 }}
            spacing={{ base: 5, md: 10 }}
            mt="10"
          >
            <Box shadow="md" borderWidth="1px" flex="1" p="5" bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
                 Customers
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
                79
              </Text>
            </Box>
            <Box shadow="md" borderWidth="1px" flex="1" p="5"  bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
                 Orders
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
                79
              </Text>
            </Box>
            <Box shadow="md" borderWidth="1px" flex="1" p="5"  bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
                 Sellers
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
                79
              </Text>
            </Box>
            <Box shadow="md" borderWidth="1px" flex="1" p="5"  bg='blackAlpha.50'>
              <Heading as="h3" fontSize={"md"} color='gray.500'>
               Revenue
              </Heading>
              <Text fontSize={"4xl"} fontWeight={800}>
                79
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashBoard;
