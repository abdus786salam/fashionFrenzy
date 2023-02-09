import * as types from "./product.actionTypes";



const initialState = {
  isLoading: false,
  isError: false,
  data:[]
 
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data:payload
      };
    }
    case types.GET_PRODUCT_FAILURE: {
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
