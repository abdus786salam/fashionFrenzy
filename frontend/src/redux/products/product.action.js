import axios from 'axios'
import { base_url } from '../../components/api/apis'
import * as types from './product.actionTypes'


const getAllProducts=() =>(dispatch)=>{
    dispatch({type:types.GET_PRODUCT_REQUEST})
    return axios.get(`${base_url}/product`).then(res=>{
        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(err=>{
        dispatch({type:types.GET_PRODUCT_FAILURE})
    })
}

const getProductByCategory=(params) =>(dispatch)=>{
    dispatch({type:types.GET_PRODUCT_REQUEST})
    return axios.get(`${base_url}/product`,{params}).then(res=>{
        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(err=>{
        dispatch({type:types.GET_PRODUCT_FAILURE})
    })
}


const findSubCategory=(arr)=>{
    const subCategory = Object.values(arr.reduce((a,{sub_type,_id})=>{
        a[sub_type]={sub_type,_id}
        return a;
     },{}))
     return subCategory
}

export { getAllProducts, getProductByCategory, findSubCategory }