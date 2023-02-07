import { Flex, Heading, HStack, Image, Link, Spacer } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from "./SearchBar";
import countries from "./countries";
import { getUser } from "../../redux/user/user.action";
import UserProfile from "./UserProfile";
import NavbarSmallerScreen from "./NavbarSmallerScreen";

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
  },[dispatch])
  return (
    <>
    <Flex
    zIndex={2}
      // border="1px"
      py="3"
      px="10"
      h="60px"
      bg="#e6b7ab"
      position="sticky"
      top="0"
      justifyContent={"space-between"}
      display={{ base: "none", lg: "none" }}
    >
      <HStack>
        <Link
          _hover={{ color: "white" }}
          textDecoration={"none"}
          as={ReactLink}
          to="/"
        >
          <Image h='80px' src='https://user-images.githubusercontent.com/101567617/217269641-c38b6de0-1935-4530-95d5-855ebeb19c7f.png' />
          {/* <Heading as="h3" fontSize={"md"}>
            Logo of company
          </Heading> */}
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
       isAuth?<UserProfile name={user?.name} url={user?.avatar_url} />:   
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
    <NavbarSmallerScreen />
    </>
  );
};

export default Navbar;
