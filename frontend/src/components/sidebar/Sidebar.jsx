import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Box border="1px solid red" w="20%">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Products
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel px="0">
                <Link
                  to="dashboard/products"
                  justifyContent="flex-start"
                  w="full"  
                  bg="none"
                >
                  <Text _hover={{ bg: "blackAlpha.50" }} pl="5" pt="2" h="10">
                   Product Details
                  </Text>
                </Link>
                <Link
                  to="dashboard/products/add"
                  justifyContent="flex-start"
                  w="full"
                  bg="none"
                >
                  <Text _hover={{ bg: "blackAlpha.50" }} pl="5" pt="2" h="10">
                    Add New Product
                  </Text>
                </Link>
                <Link
                  to="dashboard/users"
                  justifyContent="flex-start"
                  w="full"
                  bg="none"
                >
                  <Text _hover={{ bg: "blackAlpha.50" }} pl="5" pt="2" h="10">
                    user
                  </Text>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    user info
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel px="0">
                <Link
                  to="dashboard/users"
                  justifyContent="flex-start"
                  w="full"
                  bg="none"
                >
                  <Text _hover={{ bg: "blackAlpha.50" }} pl="5" pt="2" h="10">
                    user
                  </Text>
                </Link>
                <Link
                  to="dashboard/users"
                  justifyContent="flex-start"
                  w="full"
                  bg="none"
                >
                  <Text _hover={{ bg: "blackAlpha.50" }} pl="5" pt="2" h="10">
                    user
                  </Text>
                </Link>
                <Link
                  to="dashboard/users"
                  justifyContent="flex-start"
                  w="full"
                  bg="none"
                >
                  <Text _hover={{ bg: "blackAlpha.50" }} pl="5" pt="2" h="10">
                    user
                  </Text>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
  )
}

export default Sidebar