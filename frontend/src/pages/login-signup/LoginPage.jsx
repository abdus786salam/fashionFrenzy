import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getUser, loginUser } from "../../redux/user/user.action";
import { useNavigate } from "react-router-dom";
import { Link as ReactLink } from "react-router-dom";
import { getAllCartData } from "../../redux/cart/cart.action";

const initialData = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then(res=>{
      setFormData(initialData)
      if(res?.data.token){
        dispatch(getUser())
        dispatch(getAllCartData())
        alert(res.data.msg)
        navigate('/')
      }
     
    }).catch(err=>{
      console.log(err)
    });
  };
  return (
    <Flex bg="blackAlpha.50" minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box bg="white" rounded={"lg"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Input
                  type="submit"
                  value=" Login"
                  cursor="pointer"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                ></Input>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have account?<Link as={ReactLink} to='/signup' color={"blue.400"}>Sign up</Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
