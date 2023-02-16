import { findSubCategory } from "./productFilter.action";
import * as types from "./productFilter.actionTypes";



const initialState = {
  isFilterLoading: false,
  isFilterError: false,
  subCategory:[]
 
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_CATEGORIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_PRODUCT_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        subCategory:findSubCategory(payload)
      };
    }
    case types.GET_PRODUCT_CATEGORIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    
    default:
      return state;
  }
};

export { reducer };
