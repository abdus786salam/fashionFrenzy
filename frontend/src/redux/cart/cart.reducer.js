import { findTotalSum } from "./cart.action";
import * as types from "./cart.actionTypes";



const initialState = {
  isGetCartLoading: false,
  isGetCartError: false,
  isPostCartLoading: false,
  isPostCartError: false,
  isIncCartBtnLoading: false,
  isIncCartBtnError: false,
  isDecCartBtnLoading: false,
  isDecCartBtnError: false,
  data:[],
  subTotalAmt:0
 
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CART_PRODUCT_REQUEST: {
      return {
        ...state,
        isGetCartLoading: true,
      };
    }
    case types.GET_CART_PRODUCT_SUCCESS: {
      return {
        ...state,
        isGetCartLoading: false,
        data:payload,
        subTotalAmt:findTotalSum(payload)
      };
    }
    case types.GET_CART_PRODUCT_FAILURE: {
      return {
        ...state,
        isGetCartLoading: false,
        isGetCartError: true,
      };
    }
    case types.POST_CART_PRODUCT_REQUEST: {
      return {
        ...state,
        isPostCartLoading: true,
      };
    }
    case types.POST_CART_PRODUCT_SUCCESS: {
      return {
        ...state,
        isPostCartLoading: false
      };
    }
    case types.POST_CART_PRODUCT_FAILURE: {
      return {
        ...state,
        isPostCartLoading: false,
        isPostCartError: true,
      };
    }
    case types.INCREASE_CART_QTY_REQUEST: {
      return {
        ...state,
        isIncCartBtnLoading: true,
      };
    }
    case types.INCREASE_CART_QTY_SUCCESS: {
      return {
        ...state,
        isIncCartBtnLoading: false,
        
      };
    }
    case types.INCREASE_CART_QTY_FAILURE: {
      return {
        ...state,
        isIncCartBtnLoading: false,
        isIncCartBtnError: true,
      };
    }
    case types.DECREASE_CART_QTY_REQUEST: {
      return {
        ...state,
        isDecCartBtnLoading: true,
      };
    }
    case types.DECREASE_CART_QTY_SUCCESS: {
      return {
        ...state,
        isDecCartBtnLoading: false,
      };
    }
    case types.DECREASE_CART_QTY_FAILURE: {
      return {
        ...state,
        isDecCartBtnLoading: false,
        isDecCartBtnError: true,
      };
    }
    default:
      return state;
  }
};

export { reducer };
