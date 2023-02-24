import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
const RoutesForAdminOnly = ({children}) => {
   
const {user} = useSelector(store=>store.authReducer)

if(user?.user_type!=='admin'){
   
    return <Navigate to={'/'}/> ;
}
    return children;

}

export default RoutesForAdminOnly