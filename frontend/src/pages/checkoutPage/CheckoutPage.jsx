import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Heading,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { updateDeliveryAddress } from "../../redux/cart/cart.action";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

import RazorPay from '../payment/RazorPay'

// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const initialData = {
  name: "",
  address1: "",
  address2: "",
  pin_code: "",
  city: "",
  email: "",
  mobile: "",
};

export default function CheckoutPage() {
  const { subTotalAmt } = useSelector((store) => store.cartReducer);
  const [deliveryData, setDeliveryData] = useState(initialData);
  const { name="", email="", mobile="" } = useSelector((store) => store.authReducer.user);
  const totalAmount=subTotalAmt+Math.round(subTotalAmt*0.20)

  useEffect(() => {
    
    setDeliveryData({
      ...deliveryData,
      name: name,
      email: email,
      mobile: mobile,
    });
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDeliveryData({ ...deliveryData, [name]: value });
  };

const handleSubmit=(e)=>{
  e.preventDefault()
  updateDeliveryAddress(deliveryData)
}

  return (
    <Flex align={"center"} justify={"center"} >
      <form onSubmit={handleSubmit}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={{ base: "md", md: "xl" }}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Delivery Address
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"}  p={10}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={deliveryData.name}
                name="name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address Line 1</FormLabel>
              <Input
                type="text"
                value={deliveryData.address1}
                name="address1"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address Line 2</FormLabel>
              <Input
                type="text"
                value={deliveryData.address2}
                name="address2"
                onChange={handleChange}
              />
            </FormControl>
            <Stack direction={{ base: "column", md: "row" }}>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Posta Code</FormLabel>
                  <Input
                    type="text"
                    value={deliveryData.pin_code}
                    name="pin_code"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    value={deliveryData.city}
                    name="city"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </Stack>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={deliveryData.email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  value={deliveryData.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            {/* <Input
                  cursor="pointer"
                  type="submit"
                  value="Add Delivery Address"
                  bg="orange"
                  color='white'
                  mt="10"
                  h={10}
                /> */}
            <Stack spacing={10} pt={2}>
              <RazorPay 
              details={deliveryData} totalprice={totalAmount} 
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      </form>
    </Flex>
  );
}
