import { Box, Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import countries from "./countries";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let textQuery = query.trim().toLowerCase();
      let newSuggestions = countries
        .filter((item) => {
          return item.country.toLocaleLowerCase().indexOf(textQuery) !== -1
            ? true
            : false;
        })
        .map((item) => item.country);
      setSuggestions(newSuggestions);
    }
  }, [query]);
  return (
    <Flex
      mx="5"
      my="2"
      border="1px"
      p="3"
      h="50"
      justifyContent={"space-between"}
    >
      <HStack>
        <Link
          _hover={{ color: "tomato" }}
          textDecoration={"none"}
          as={ReactLink}
          to="/"
        >
          <Heading as="h3" fontSize={"md"}>
            Logo of company
          </Heading>
        </Link>
        <Spacer />
        <HStack>
          <Link _hover={{ color: "tomato" }} as={ReactLink} to="/men">
            <Heading as="h3" fontSize={"md"}>
              Men
            </Heading>
          </Link>
          <Link _hover={{ color: "tomato" }} as={ReactLink} to="/women">
            <Heading as="h3" fontSize={"md"}>
              Women
            </Heading>
          </Link>
          <Link _hover={{ color: "tomato" }} as={ReactLink} to="/kids">
            <Heading as="h3" fontSize={"md"}>
              Kids
            </Heading>
          </Link>
          <Link _hover={{ color: "tomato" }} as={ReactLink} to="/accessories">
            <Heading as="h3" fontSize={"md"}>
              Accessories
            </Heading>
          </Link>
        </HStack>
      </HStack>
      <SearchBar queryHandler={queryHandler} suggestions={suggestions} />
      <HStack>
        <Link _hover={{ color: "tomato" }} as={ReactLink} to="/login">
          <Heading as="h3" fontSize={"md"}>
            Login
          </Heading>
        </Link>
        <Link _hover={{ color: "tomato" }} as={ReactLink} to="/cart">
          <Heading as="h3" fontSize={"md"}>
            Cart
          </Heading>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
