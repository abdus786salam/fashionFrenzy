import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../components/api/apis";
import { useNavigate } from "react-router-dom";
import ImageInputBox from "../../components/imageInputBox/ImageInputBox";

const initiaData = {
  title: "",
  category: "",
  price: "",
  url: "",
  sub_type: "",
  description: "",
};

const AddNewProductForm = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [data, setData] = useState(initiaData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
console.log(data)
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("sub_type", data.sub_type);
    formData.append("description", data.description);
    if(data.url){
        formData.append("url", data.url);
    }else{

        formData.append("image", image);
    }
    axios
      .post(`${base_url}/product/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // navigate("/");
        console.log(res)
        setData(initiaData);
        setImage("");
        alert("your post has been posted");
      }).catch(err=>{
        console.log(err)
      });
  };

  return (
    <Flex bg="blackAlpha.50" minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} w={"2xl"} py={12} px={{ base: 2, md: 6 }}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Add New Product
          </Heading>
        </Stack>
        <Box bg="white" rounded={"lg"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Flex direction={{ base: "column", md: "row" }} gap="5">
                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select
                    placeholder="Select category"
                   name='category'
                    onChange={handleChange}
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                    <option value="accessories">Accessories</option>
                  </Select>
                </FormControl>
              </Flex>
              <Flex direction={{ base: "column", md: "row" }} gap="5">
                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="text"
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Sub Category</FormLabel>
                  <Input
                    type="text"
                    name="sub_type"
                    value={data.sub_type}
                    onChange={handleChange}
                  />
                </FormControl>
              </Flex>
              {/* <Flex direction={{ base: "column", md: "row" }} gap="5"> */}
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>Image Url</Tab>
                  <Tab>Upload Image</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Input
                      type="url"
                      name="url"
                      placeholder="url"
                      value={data.url}
                      onChange={handleChange}
                    />
                  </TabPanel>
                  <TabPanel>
                    <ImageInputBox name="image" value={image} onChange={handleChangeImage} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
              {/* <FormControl isRequired>
                  <FormLabel>Image Url</FormLabel>
                  <Input
                    type="url"
                    name="url"
                    value={data.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="file"
                    name="sub_type"
                    value={data.name}
                    onChange={handleChange}
                  />
                </FormControl> */}
              {/* </Flex> */}
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  value={data.description}
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Input
                  type="submit"
                  cursor="pointer"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                ></Input>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddNewProductForm;
