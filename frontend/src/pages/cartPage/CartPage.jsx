import {
  Box,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import CartItem from "./CartItem";
import OrderSummery from "./OrderSummery";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartData } from '../../redux/cart/cart.action'
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const toast=useToast()
  const dispatch=useDispatch()
  const {
    // isGetCartLoading,
    // isGetCartError,
    // isPostCartLoading,
    // isPostCartError,
    // isIncCartBtnLoading,
    // isIncCartBtnError,
    // isDecCartBtnLoading,
    // isDecCartBtnError,
    data,
    cartLength,
    subTotalAmt
  } = useSelector((store) => store.cartReducer);
  const {  isAuth } = useSelector((store) => store.authReducer);
  const navigate = useNavigate();

useEffect(()=>{
  dispatch(getAllCartData())
  if(!isAuth){
    toast({
      title:"Please Login to see your cart items",
      status: "info",
      duration: 5000,
      position: "top",
      isClosable: true,
    })
  }
},[dispatch])

  return (
    <>
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      p={{ base: "2", md: "10" }}
      gap={5}
    >
      <Box flex={{ base: "1", md: "0.7" }}>
        {
          data?.map(item=> <CartItem key={item._id} {...item} />
            
            )
        }
      </Box>
     
      <Box display={subTotalAmt>0?'block':'none'} flex="0.3">
        <OrderSummery subTotalAmt={subTotalAmt} />
        <Box mt="10" px={{ md: "10" }}>
          <Button
            w="full"
            colorScheme="blue"
            onClick={() => navigate("/cart/checkout")}
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Flex>
    <EmptyCart display={cartLength===0?'block':'none'} />
    </>
    
  );
};

export default CartPage;
