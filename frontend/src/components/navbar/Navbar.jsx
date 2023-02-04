import { Avatar, Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from "./SearchBar";
import countries from "./countries";
import { getUser } from "../../redux/user/user.action";

const Navbar = () => {
  const dispatch=useDispatch()
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const {user,isAuth}=useSelector(store=>store.authReducer)
  console.log(user,isAuth)
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
  useEffect(()=>{
    dispatch(getUser())
  },[])
  return (
    <Flex
      border="1px"
      py="3"
      px="10"
      h="60px"
      bg="#e6b7ab"
      position="sticky"
      top="0"
      justifyContent={"space-between"}
    >
      <HStack>
        <Link
          _hover={{ color: "white" }}
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
          <Link _hover={{ color: "white" }} as={ReactLink} to="/men">
            <Heading as="h3" fontSize={"md"}>
              Men
            </Heading>
          </Link>
          <Link _hover={{ color: "white" }} as={ReactLink} to="/women">
            <Heading as="h3" fontSize={"md"}>
              Women
            </Heading>
          </Link>
          <Link _hover={{ color: "white" }} as={ReactLink} to="/kids">
            <Heading as="h3" fontSize={"md"}>
              Kids
            </Heading>
          </Link>
          <Link _hover={{ color: "white" }} as={ReactLink} to="/accessories">
            <Heading as="h3" fontSize={"md"}>
              Accessories
            </Heading>
          </Link>
        </HStack>
      </HStack>
      <SearchBar queryHandler={queryHandler} suggestions={suggestions} />
      <HStack>
        {
       isAuth?<Avatar name={user?.name} src={user?.avatar_url} />:   
        <Link _hover={{ color: "white" }} as={ReactLink} to="/login">
          <Heading as="h3" fontSize={"md"}>
            Login
          </Heading>
        </Link>
        }
        <Link _hover={{ color: "white" }} as={ReactLink} to="/cart">
          <Heading as="h3" fontSize={"md"}>
            Cart
          </Heading>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
