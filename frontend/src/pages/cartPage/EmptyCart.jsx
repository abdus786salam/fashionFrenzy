import { Box, Text, Button, Icon } from "@chakra-ui/react";
import { BsFillCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EmptyCart = ({display}) => {
  const navigate = useNavigate();
  return (
    <Box display={display} textAlign="center"  py={10} px={6}>
       <Icon color="orange" as={BsFillCartXFill}  boxSize={'xs'} />
      <Text fontSize="18px" mt={3} mb={2}>
        Your Cart is Empty
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

export default EmptyCart;
