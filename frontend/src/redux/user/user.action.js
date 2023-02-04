import axios from 'axios'
import * as types from './user.actionTypes'
const postUserData=(data)=>(dispatch)=>{
    dispatch({type:types.USER_SIGNUP_REQUEST})
    return axios.post(`http://localhost:5604/user/register`,data).then(res=>{
       alert(res.data.msg,res.data.status)
        dispatch({type:types.USER_SIGNUP_SUCCESS})
    })
    .catch(err=>{
        dispatch({type:types.USER_SIGNUP_FAILURE})
    })
}
const loginUser=(data)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post(`http://localhost:5604/user/login`,data).then(res=>{
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data})
        return res
    })
    .catch(err=>{
        console.log("err",err)
        dispatch({type:types.USER_LOGIN_FAILURE})
    })
}
const getUser=()=>(dispatch)=>{
   
    dispatch({type:types.GET_USER_DETAILS_REQUEST})
    return axios.get(`http://localhost:5604/user/details`,{
        headers: {
            "Authorization": localStorage.getItem("token"),
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

export { postUserData, loginUser, getUser }