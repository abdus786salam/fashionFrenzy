import React from "react";
import india from "./india.png";
import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Input,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="#F0F1F2"
      width={"full"}
      paddingLeft={"3rem"}
      paddingRight={"3rem"}
      fontFamily={"sans-serif"}
      
    >
      <Container  maxW={"full"} py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Stack align={"flex-start"} fontSize={".85rem"} fontWeight={"500"}>
            {/* help */}

            <Text fontWeight={"600"} fontSize={"1rem"}>
              Help
            </Text>
            <Link href={"#"}>Customer Service</Link>
            <Link href={"#"}>Track Order</Link>
            <Link href={"#"}>Returns & Exchanges</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>International Orders</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          {/* quickLinks */}
          <Stack align={"flex-start"} fontSize={".85rem"} fontWeight={"500"} ml={{base: 0, sm: '0', md: '0',lg:'-4rem'}}>
            <Text fontWeight={"600"} fontSize={"1rem"}>
              Quick Links
            </Text>

            <Link href={"#"}>Find a Store </Link>
            <Link href={"#"}>Size Charts</Link>
            <Link href={"#"}>Refer a Friend</Link>
            <Link href={"#"}>Offers & Promotions</Link>
            <Link href={"#"}>My Favorites</Link>
          </Stack>
         
          {/* like being first  */}
          <Stack align={"flex-start"} ml={{base: 0, sm: '0', md: '0',lg:'-4rem'}}>
            <Text fontWeight={"600"} fontSize={"1rem"}>
            Like Being First?
            </Text>

            <Text fontSize={".85rem"} color="grey">
              Get can't-miss style news, before everybody else.
            </Text>
            <Flex w={"full"}>
              <Input
                placeholder="Enter your email"
                borderRadius={"none"}
                fontSize=".8rem"
                h={"2rem"}
                bg='white'
                border={"1px solid black"}
              />
              <Button
                bg={"black"}
                h="2rem"
                w="5rem"
                fontWeight={"500"}
                padding=".8rem"
                fontSize={{base: '.7rem', sm: '.7rem', md: '0.7rem',lg:'.8rem'}}
                border="none"
                color="white"
                borderRadius={"none"}
              >
                SIGN UP
              </Button>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      <VStack py={10}>
        <Flex justifyContent={"space-between"} w={{base: '50vw', sm: '40vw', md: '30vw',lg:'20vw'}}>
          <BsInstagram size={"1.5rem"} />
          <GrFacebookOption size={"1.5rem"} />
          <BsTwitter size={"1.5rem"} />
          <BsLinkedin size={"1.5rem"} />
          <BsPinterest size={"1.5rem"} />
          <BsYoutube size={"1.5rem"} />
        </Flex>
        <Flex
          mt={"2rem"}
         gap='1rem'
          justifyContent={"space-between"}
          cursor="pointer"
        >
          <Text>India </Text>

          <Image src={india} h="1.5rem" />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"left"}>
        © Copyright 2022, all rights reserved. See our Terms & Policies
        </Text>
      </VStack>
    </Box>
  );
}
