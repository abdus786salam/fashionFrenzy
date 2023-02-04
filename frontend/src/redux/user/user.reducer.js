import * as types from "./user.actionTypes";

const token = localStorage.getItem("token") || null;

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: !!token,
  token: token,
  user: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.USER_LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case types.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: null,
        isError: true,
      };
    }
    case types.USER_SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.USER_SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_USER_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    }
    case types.GET_USER_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.USER_LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: null, user: null };
    }
    default:
      return state;
  }
};

export { reducer };
