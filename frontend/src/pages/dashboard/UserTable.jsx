import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers } from "../../redux/admin/admin.action";
import TableTemplate from "./TableTemplate";

const UserTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.adminReducer);
  console.log(users);
  useEffect(() => {
    dispatch(getAllusers());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Contect No.",
        accessor: "mobile",
      },
      {
        Header: "Image",
        accessor: "avatar_url",
      },
      {
        Header: "User Type",
        accessor: "user_type",
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
        <Box w="80%" px="5" py="3">
          <Heading as="h3" fontSize="lg">
            User Details
          </Heading>
          {/* <DataGrid columns={columns} rows={users} /> */}
          <TableTemplate columns={columns} data={users} />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserTable;
