import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <HamburgerIcon />
      </MenuButton>
      <MenuList>
      <Heading as="h3" fontSize={"md"} display={{ base: "block", lg: "none" }}>
               DASHBOARD
              </Heading>
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
              <MenuItem>
              <Link to="dashboard/products" w="full" bg="none">
                <Text pl="5" pt="2" h="10">
                  Product Details
                </Text>
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to="dashboard/products/add" w="full" bg="none">
                <Text pl="5" pt="2" h="10">
                  Add New Product
                </Text>
              </Link>
              </MenuItem>
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
            <MenuItem>
              <Link to="dashboard/users" w="full" bg="none">
                <Text pl="5" pt="2" h="10">
                  user
                </Text>
              </Link>
              </MenuItem>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </MenuList>
    </Menu>
  );
};

export default Sidebar;
