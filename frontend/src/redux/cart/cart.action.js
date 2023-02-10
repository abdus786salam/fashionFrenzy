import axios from 'axios'
import { base_url } from '../../components/api/apis'
import * as types from './cart.actionTypes'


const getAllCartData=() =>(dispatch)=>{
    dispatch({type:types. GET_CART_PRODUCT_REQUEST})
    return axios.get(`${base_url}/cart`).then(res=>{
        dispatch({type:types. GET_CART_PRODUCT_SUCCESS,payload:res.data})
    }).catch(err=>{
        dispatch({type:types. GET_CART_PRODUCT_FAILURE})
    })
}

const increaseCartQty=(data)=>{
    return axios.patch(`${base_url}/cart/increase`,data)
}

const decreaseCartQty=(data)=>{
    return axios.patch(`${base_url}/cart/decrease`,data)
}

const deleteCartproduct=(id)=>{
    return axios.delete(`${base_url}/cart/`,{id})
}



export { getAllCartData, increaseCartQty,decreaseCartQty,deleteCartproduct }