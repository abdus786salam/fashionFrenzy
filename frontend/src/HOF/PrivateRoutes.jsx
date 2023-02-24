import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useToast } from '@chakra-ui/react'
const RoutesForAdminOnly = ({children}) => {
    const toast=useToast()
const {user} = useSelector(store=>store.authReducer)

if(user?.user_type!=='admin'){
    toast({
        title: 'You have no access to this Page',
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    return <Navigate to={'/'}/> ;
}
    return children;

}

export default RoutesForAdminOnly