import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Text,
  Icon,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import {  useSelector } from "react-redux";

function DrawerMenu() {
  const { user, isAuth } = useSelector((store) => store.authReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        variant="ghost"
        color="white"
        ref={btnRef}
        _hover={{ bg: "none" }}
        onClick={onOpen}
      >
        <Icon w={6} h={6} as={HamburgerIcon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size='xs'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  _hover={{ bg: "none" }} />
          <DrawerBody>
            <VStack p='1' alignItems={'left'}>
              <HStack mr={{ base: "4" }}>
                <Button
                  onClick={onClose}
                  _hover={{ bg: "none" }}
                  variant="ghost"
                >
                  <Link as={ReactLink} to="/">
                    <Image
                      h="80px"
                      src="https://user-images.githubusercontent.com/101567617/221098794-ec4e8ad4-3ab3-4acf-8cf6-4aee54cc9e91.png"
                    />
                  </Link>
                </Button>

                {isAuth ? (
                  <UserProfile name={user?.name} url={user?.avatar_url} />
                ) : (
                  <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
                    <Link as={ReactLink} to="/login">
                      <Heading as="h3" fontSize={"md"}>
                        Login
                      </Heading>
                    </Link>
                  </Button>
                )}
              </HStack>
              
              <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
              <Link as={ReactLink} to="/men">
                <Text fontSize="md">Men</Text>
              </Link>
              </Button>
              <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
              <Link as={ReactLink} to="/women">
                <Text fontSize="md">Women</Text>
              </Link>
              </Button>
              <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
              <Link as={ReactLink} to="/kids">
                <Text fontSize="md">Kids</Text>
              </Link>
              </Button>
              <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
              <Link as={ReactLink} to="/accessories">
                <Text fontSize="md">Accessories</Text>
              </Link>
              </Button>
              <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
              <Link as={ReactLink} to="/cart">
                <Text fontSize="md">Cart</Text>
              </Link>
              </Button>
              <Button onClick={onClose}  _hover={{ bg: "none" }} variant="ghost">
              <Link as={ReactLink} to="#">
                <Text fontSize="md">Contact us</Text>
              </Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerMenu;
