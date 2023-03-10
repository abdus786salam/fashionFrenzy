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

const getSearchResults=(params)=>{
    return axios.post(`${base_url}/product/search`,null,{params}).then(res=>{
       return res
    }).catch(err=>{
       return err
    })
}

const getProductByCategory=(params) =>(dispatch)=>{
    dispatch({type:types.GET_PRODUCT_REQUEST})
    return axios.get(`${base_url}/product`,{params}).then(res=>{
        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data})
        return res
    }).catch(err=>{
        dispatch({type:types.GET_PRODUCT_FAILURE})
        return err
    })
}

const updateProductData=(data)=>{
    return axios.patch(`${base_url}/product/update`,data)
}

const findSubCategory=(arr)=>{
    const subCategory = Object.values(arr.reduce((a,{sub_type,_id})=>{
        a[sub_type]={sub_type,_id}
        return a;
     },{}))
     return subCategory
}

export { getAllProducts, getProductByCategory, findSubCategory,getSearchResults, updateProductData }