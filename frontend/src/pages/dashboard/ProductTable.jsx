import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsForAdmin } from "../../redux/admin/admin.action";
import TableTemplate from "./TableTemplate";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.adminReducer);
  useEffect(() => {
    dispatch(getAllProductsForAdmin());
  }, []);

 
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Price (₹)",
        accessor: "price",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Product Sub Type",
        accessor: "sub_type",
      },
      {
        Header: "Image",
        accessor: "url",
      },
      {
        Header: "Product Category",
        accessor: "category",
      },
      {
        Header: "Seller ID",
        accessor: "seller",
      },
    ],
    []
  );

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
        <Box w="80%" px="5" py="3" overflowX={'scroll'}>
          <Heading as="h3" fontSize="lg">
            User Details
          </Heading>
          {/* <DataGrid columns={columns} rows={products} /> */}
          <TableTemplate columns={columns} data={products} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductTable;
