import { Flex, Image, Link } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import countries from "./countries";
import { getUser } from "../../redux/user/user.action";
import DrowerMenu from "./DrowerMenu";
import { Link as ReactLink } from "react-router-dom";

const NavbarSmallerScreen = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { user, isAuth } = useSelector((store) => store.authReducer);

  console.log(user, isAuth);
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
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Flex
      zIndex={2}
      py="3"
      px="10"
      h="60px"
      bg="#e6b7ab"
      position="sticky"
      top="0"
      display={{ base: "flex", lg: "none" }}
      justifyContent={"space-between"}
    >
      <Link display={{ base: "none", md: "block" }} as={ReactLink} to="/">
        <Image
          h="50"
          src="https://user-images.githubusercontent.com/101567617/217269641-c38b6de0-1935-4530-95d5-855ebeb19c7f.png"
        />
      </Link>
      <SearchBar queryHandler={queryHandler} suggestions={suggestions} />
      <DrowerMenu />
    </Flex>
  );
};

export default NavbarSmallerScreen;
