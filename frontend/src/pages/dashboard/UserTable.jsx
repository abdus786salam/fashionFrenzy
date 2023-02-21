import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers } from "../../redux/admin/admin.action";

const UserTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.adminReducer);
  console.log(users);
  useEffect(() => {
    dispatch(getAllusers());
  }, []);

  const columns = [
    { key: "_id", name: "ID" },
    { key: "avatar_url", name: "Avatar" },
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "mobile", name: "Contect Number" },
    { key: "user_type", name: "User Type" },
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
          <DataGrid columns={columns} rows={users} />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserTable;
