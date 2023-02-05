import axios from 'axios'
import { base_url } from '../../components/api/apis'
import * as types from './user.actionTypes'
const postUserData=(data)=>(dispatch)=>{
    dispatch({type:types.USER_SIGNUP_REQUEST})
    return axios.post(`${base_url}/user/register`,data).then(res=>{
       alert(res.data.msg,res.data.status)
        dispatch({type:types.USER_SIGNUP_SUCCESS})
    })
    .catch(err=>{
        dispatch({type:types.USER_SIGNUP_FAILURE})
    })
}
const loginUser=(data)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post(`${base_url}/user/login`,data).then(res=>{
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data})
        return res
    })
    .catch(err=>{
        console.log("err",err)
        dispatch({type:types.USER_LOGIN_FAILURE})
    })
}
const getUser=()=>(dispatch)=>{
   const token=localStorage.getItem("token")
    dispatch({type:types.GET_USER_DETAILS_REQUEST})
    if(token){
        return axios.get(`${base_url}/user/details`,{
            headers: {
                "Authorization": token,
            }
          }).then(res=>{
            dispatch({type:types.GET_USER_DETAILS_SUCCESS,payload:res.data})
            return res
        })
        .catch(err=>{
            console.log("err",err)
            dispatch({type:types.GET_USER_DETAILS_FAILURE})
        })
    }
}

const logOut=()=>(dispatch)=> {
    dispatch({type:types.USER_LOGOUT})
}

export { postUserData, loginUser, getUser, logOut }