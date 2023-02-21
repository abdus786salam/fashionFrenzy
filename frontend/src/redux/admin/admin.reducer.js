import * as types from "./admin.actionTypes";

const initialState={
  users:[],
  products:[],
  orders:[]
}

const reducer=(state=initialState,{type,payload})=>{
    switch(type){
      case types.GET_USERS:{
        return {
          ...state,
          users:payload
        }
      }
      case types.GET_PRODUCTS:{
        return {
          ...state,
          products:payload
        }
      }
      case types.GET_ORDERS:{
        return {
          ...state,
          orders:payload
        }
      }
      default :
      return state
    }
}

export {reducer}
