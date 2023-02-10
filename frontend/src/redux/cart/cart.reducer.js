import * as types from "./cart.actionTypes";



const initialState = {
  isLoading: false,
  isError: false,
  data:[]
 
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CART_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_CART_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data:payload
      };
    }
    case types.GET_CART_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // case types.INCREASE_CART_QTY_REQUEST: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
    // case types.INCREASE_CART_QTY_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data:payload
    //   };
    // }
    // case types.INCREASE_CART_QTY_FAILURE: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }

    // case types.DECREASE_CART_QTY_REQUEST: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
    // case types.DECREASE_CART_QTY_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data:payload
    //   };
    // }
    // case types.DECREASE_CART_QTY_FAILURE: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }
    
    default:
      return state;
  }
};

export { reducer };
