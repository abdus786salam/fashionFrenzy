import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsForAdmin } from "../../redux/admin/admin.action";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.adminReducer);
  useEffect(() => {
    dispatch(getAllProductsForAdmin());
  }, []);

  const columns = [
    { key: "_id", name: "ID" },
    { key: "url", name: "Image" },
    { key: "title", name: "Name" },
    { key: "price", name: "Price (₹)" },
    { key: "description", name: "Description" },
    { key: "sub_type", name: "Product Sub Type" },
    { key: "category", name: " Product Category" },
    { key: "seller", name: "Seller ID" },
  ];

  return (
    <Box>
      <Flex
        zIndex={5}
        py="3"
        px="10"
        h="60px"
        bg="orange"
        position="sticky"
        top="0"
        justifyContent={"space-between"}
        display={{ base: "none", lg: "flex" }}
      ></Flex>
      <Flex px={{ base: 1, md: 5 }}>
        <Sidebar />
        <Box w="80%" px="5" py="3">
          <Heading as="h3" fontSize="lg">
            User Details
          </Heading>
          <DataGrid columns={columns} rows={products} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductTable;
