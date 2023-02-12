import React, { useEffect, useState } from "react";
import { Box, Center, Stack, VStack } from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";
import ProductImageBox from "./ProductImageBox";
import ProductDetailBox from "./ProductDetailBox";
import {  useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux"



const SingleProduct = () => {

  const { id } = useParams();

  const location = useLocation()

  const { data } = useSelector(store =>store.productReducer)
  
  const [singleProdData, setSingleProdData] = useState({})


useEffect(()=>{
      let singleData = data?.find((item) =>item._id===id)
      if(singleData){
        setSingleProdData(singleData)
      }
},[data])
  const [wishList, setWishList] = useState(false);

  const handleChangeWishList = () => {
    setWishList((prev) => !prev);
  };

  return (
    <Box>
      <VStack alignItems="left" pt={{base:5,md:20}}
       maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
      >
        <BreadCrumb
          home={{ name: "home", path: "/" }}
          category={{ name: singleProdData?.category, path: "/" }}
          subCategory={{ name: singleProdData?.product_type, path: "/" }}
        />
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <ProductImageBox
            image={singleProdData.url}
            handleChangeWishList={handleChangeWishList}
            wishList={wishList}
          />
          <ProductDetailBox
            {...singleProdData}
            handleChangeWishList={handleChangeWishList}
            wishList={wishList}
          />
        </Stack>
      </VStack>
    </Box>
  );
};

export default SingleProduct;
