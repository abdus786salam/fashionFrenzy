import axios from "axios";
import { base_url } from "../../components/api/apis";
import * as types from "./admin.actionTypes";

const token = localStorage.getItem("token");

const getAllusers=()=>(dispatch)=>{
  axios.get(`${base_url}/user/count`).then(res=>{
    dispatch({type:types.GET_USERS,payload:res.data})
  })
}
const getAllProductsForAdmin=()=>(dispatch)=>{
  axios.get(`${base_url}/product/`).then(res=>{
    dispatch({type:types.GET_PRODUCTS,payload:res.data})
  })
}
const getAllOrdersForAdmin=()=>(dispatch)=>{
  axios.get(`${base_url}/order/`).then(res=>{
    dispatch({type:types.GET_ORDERS,payload:res.data})
  })
}

export { getAllusers, getAllProductsForAdmin,getAllOrdersForAdmin }

