import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsForAdmin } from "../../redux/admin/admin.action";
import TableTemplate from "./TableTemplate";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.adminReducer);
  useEffect(() => {
    dispatch(getAllProductsForAdmin());
  }, [dispatch]);

 
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
        accessor: (d) => {
          return <Image boxSize='150' src={d.url||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SiTWYOrsL_Ea5ILRPJlK9bLlBUFgxvyu1TFL4F2JBQ&s'} />;
        },
      },
      {
        Header: "Product Category",
        accessor: "category",
      },
      {
        Header: "Seller Name",
        accessor:(d)=>{
          return d.seller.name
        },
      },
      {
        Header: "Registration Date",
        accessor: (d) => {
          return moment(d.createdAt).local().format("DD/MM/YY, hh:mm a");
        },
      }, 
      {
        Header: "Last Updated Date",
        accessor: (d) => {
          return moment(d.updatedAt).local().format("DD/MM/YY, hh:mm a");
        },
      },
    ],
    []
  );

  return (
        <Box px="5" py="3" overflowX={'scroll'}>
          <Heading as="h3" textAlign={'center'} fontSize="2xl">
            Product Details
          </Heading>
          <TableTemplate columns={columns} data={products} />
        </Box>
    
  );
};

export default ProductTable;
