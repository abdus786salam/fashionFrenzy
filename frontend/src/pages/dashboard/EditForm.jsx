import React, { useState } from 'react'
import { EditIcon } from '@chakra-ui/icons'
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
  } from '@chakra-ui/react'
import { updateUserData } from '../../redux/user/user.action'
import { useDispatch } from 'react-redux'
import { getAllusers } from '../../redux/admin/admin.action'

const EditForm = ({data}) => {
    const dispatch=useDispatch()
    const toast=useToast()
    const [formData,setFormData]=useState(data)
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const btnRef = React.useRef(null)

    const handleChange=(e)=>{
        const { name,value }=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit=()=>{
        updateUserData(formData).then(res=>{
            toast({
        title: 'Update successful',
        status: "info",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      dispatch(getAllusers())
    })
    }

    return (
      <>
        <Button mt={3} ref={btnRef} onClick={onOpen}>
         <EditIcon/>
        </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={'inside'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {
                    Object.keys(data).map((key)=> <FormControl mt={4}>
                    <FormLabel>{key}</FormLabel>
                    <Input  disabled={key==='_id'?true:false} placeholder={key} name={key} value={formData[key]} onChange={handleChange} />
                  </FormControl>
                    
                    )
                }
             
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default EditForm