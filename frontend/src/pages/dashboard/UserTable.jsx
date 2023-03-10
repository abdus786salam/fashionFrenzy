import { Box, Heading, Image, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers } from "../../redux/admin/admin.action";
import TableTemplate from "./TableTemplate";
import EditForm from "../../components/EditForm";
import { updateUserData } from "../../redux/user/user.action";

const UserTable = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { users } = useSelector((store) => store.adminReducer);
  useEffect(() => {
    dispatch(getAllusers());
  }, [dispatch]);

  

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
        accessor: (d) => {
          return <Image boxSize='150' src={d.avatar_url||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SiTWYOrsL_Ea5ILRPJlK9bLlBUFgxvyu1TFL4F2JBQ&s'} />;
        },
      },
      {
        Header: "User Type",
        accessor: "user_type",
       
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
      {
        Header: 'Edit Data',
            accessor: 'action',
            Cell: row => (
            <div>
               <EditForm  data={row.row.original} handleSubmit={handleSubmit} />
            </div>
            ),
      }
    ],
    []
  );

  const handleSubmit = (data) => {
    updateUserData(data).then((res) => {
      toast({
        title: "Update successful",
        status: "info",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      dispatch(getAllusers());
    });
  };

  
  return (
    <Box px="5" py="3" overflowX={"scroll"}>
      <Heading as="h3" textAlign={"center"} fontSize="2xl">
        User Details
      </Heading>
      <TableTemplate columns={columns} data={users} />
    </Box>
  );
};

export default UserTable;
