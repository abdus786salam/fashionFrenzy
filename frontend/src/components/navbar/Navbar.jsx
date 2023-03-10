import { Flex, Heading, HStack, Icon, Image, Link, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { getUser } from "../../redux/user/user.action";
import UserProfile from "./UserProfile";
import NavbarSmallerScreen from "./NavbarSmallerScreen";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((store) => store.authReducer);
  const { cartLength } = useSelector((store) => store.cartReducer);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <Flex
        zIndex={5}
        py="3"
        px="10"
        h="60px"
        bg="orange"
        position="sticky"
        top="0"
        justifyContent={"spaceBetween"}
        display={{ base: "none", lg: "flex" }}
      >
        <HStack>
          <Link
            as={ReactLink}
            to="/"
          >
            <Image
              h="80px"
              src="https://user-images.githubusercontent.com/101567617/221098794-ec4e8ad4-3ab3-4acf-8cf6-4aee54cc9e91.png"
            />
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
        <SearchBar />
        <HStack>
          {isAuth ? (
            <UserProfile name={user?.name} url={user?.avatar_url} />
          ) : (
            <Link _hover={{ color: "white" }} as={ReactLink} to="/login">
              <Heading as="h3" fontSize={"md"}>
                Login
              </Heading>
            </Link>
          )}
          <Link _hover={{ color: "white" }} as={ReactLink} to="/cart">
            <HStack>
              <Icon fontSize={"xl"} as={BsCart3} />
            <Text >
              ({cartLength})
            </Text>
            </HStack>
          </Link>
        </HStack>
      </Flex>
      <NavbarSmallerScreen />
    </>
  );
};

export default Navbar;
