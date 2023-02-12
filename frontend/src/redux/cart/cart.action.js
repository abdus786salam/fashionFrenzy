import axios from "axios";
import { base_url } from "../../components/api/apis";
import * as types from "./cart.actionTypes";

const token = localStorage.getItem("token");

const getAllCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CART_PRODUCT_REQUEST });
  return axios
    .get(`${base_url}/cart`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_CART_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_PRODUCT_FAILURE });
    });
};

const addToCartData = (id) => (dispatch) => {
  dispatch({ type: types.POST_CART_PRODUCT_REQUEST });
  return axios
    .post(
      `${base_url}/cart/add`,
      { product: id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.POST_CART_PRODUCT_SUCCESS });
      dispatch(getAllCartData());
      return res.data.message;
    })
    .catch((err) => {
      dispatch({ type: types.POST_CART_PRODUCT_FAILURE });
      console.log("action err", err.response.data.message);
      return err.response.data.message;
    });
};

const increaseCartQty = (data) => (dispatch) => {
  dispatch({ type: types.INCREASE_CART_QTY_REQUEST });
  return axios.patch(`${base_url}/cart/increase`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

const decreaseCartQty = (data) => (dispatch) => {
  dispatch({ type: types.DECREASE_CART_QTY_REQUEST });
  return axios.patch(`${base_url}/cart/decrease`, data,{
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

const deleteCartproduct = (id) => {
  return axios({
    method:"DELETE",
    url:`${base_url}/cart/`,
    headers: {
      "Authorization": token,
    },
    data:{ id: id }
  } )
};

const findTotalSum = (cartData = []) => {
  const subTotalAmt = cartData?.reduce((total, item) => {
    total += item.quantity * item.product.price;
    return total;
  }, 0);
  return subTotalAmt;
};

export {
  getAllCartData,
  increaseCartQty,
  decreaseCartQty,
  deleteCartproduct,
  addToCartData,
  findTotalSum 
};
