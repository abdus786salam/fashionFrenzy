import { Flex, Heading, HStack, Image, Spacer, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import SearchBar from "../../components/navbar/SearchBar";
import UserProfile from "../../components/navbar/UserProfile";
import Sidebar from "../../components/sidebar/Sidebar";
import { getUser } from "../../redux/user/user.action";

const DashboadNavbar = () => {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((store) => store.authReducer);

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
      >
        <Sidebar />
        <HStack>
          <Link as={ReactLink} to="/">
            <Image
              h="80px"
              src="https://user-images.githubusercontent.com/101567617/217269641-c38b6de0-1935-4530-95d5-855ebeb19c7f.png"
            />
          </Link>
          <Spacer />
        </HStack>
        <SearchBar />
        <HStack>
            <Link as={ReactLink} to='/dashboard'>
          <Heading
            as="h3"
            fontSize={"md"}
            display={{ base: "none", lg: "block" }}
          >
            DASHBOARD
          </Heading>
          </Link>
          {isAuth ? (
            <UserProfile name={user?.name} url={user?.avatar_url} />
          ) : (
            <Link _hover={{ color: "white" }} as={ReactLink} to="/login">
              <Heading as="h3" fontSize={"md"}>
                Login
              </Heading>
            </Link>
          )}
        </HStack>
      </Flex>
    </>
  );
};

export default DashboadNavbar;
