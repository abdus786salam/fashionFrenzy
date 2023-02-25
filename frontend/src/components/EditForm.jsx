import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormLabel,
  Input,
  FormControl,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { updateUserData } from "../redux/user/user.action";
import { useDispatch } from "react-redux";
import { getAllusers } from "../redux/admin/admin.action";

const EditForm = ({ data, handleSubmit }) => {
  
  const [formData, setFormData] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  return (
    <>
      <Button mt={3} ref={btnRef} onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Object.keys(data).map((key) => (
              <FormControl key={key} mt={4}>
                <FormLabel>{key}</FormLabel>
                {key === "description" ? (
                  <Textarea
                    placeholder={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                ) : (
                  <Input
                    disabled={
                      key === "_id" || key === "password" ? true : false
                    }
                    placeholder={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                )}
              </FormControl>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>handleSubmit(formData)}>
              Save
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditForm;
