import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center"  py={100} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, orange.400, orange.300)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, orange.400, orange.300)"
        color="white"
        _hover={{bgGradient:"linear(to-r, orange.300, orange.400)"}}
        onClick={() => navigate("/")}
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
