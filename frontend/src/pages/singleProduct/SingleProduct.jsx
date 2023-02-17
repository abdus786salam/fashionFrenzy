import React, { useEffect, useState } from "react";
import { Box, Spinner, Stack, VStack } from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";
import ProductImageBox from "./ProductImageBox";
import ProductDetailBox from "./ProductDetailBox";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { getProductByCategory } from "../../redux/products/product.action";



const SingleProduct = () => {

  const { id,category } = useParams();
const dispatch=useDispatch()
  const [singleProdData, setSingleProdData] = useState({})
  const [loading, setLoading]=useState(false)


useEffect(()=>{
      setLoading(true)
     dispatch(getProductByCategory({_id:id})).then(res=>{
      setLoading(false)
      if(res.status===200){

        setSingleProdData(res.data[0])
      }
     }).catch(err=>{
      setLoading(false)
      console.log(err);
     })
      
},[id,dispatch])
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
       { loading?<Spinner 
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange"
              h='100px'
              w='100px'
            />:
           <>
           
        <BreadCrumb
          home={{ name: "home", path: "/" }}
          category={{ name: singleProdData?.category, path: "/"+category }}
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
           </> 
            }
      </VStack>
    </Box>
  );
};

export default SingleProduct;
