import axios from "axios";
import { useHistory } from "react-router";
import { SERVER_URL } from "../constants/BackendConstants";
import { productData } from "../Data/ProductData";
import * as ActionTypes from "./index";

const woocommerce_server_url =
  "https://stupefied-johnson.51-210-46-0.plesk.page/wp-json/wc/v3/";
const woocommerce_customer_signature =
  "?consumer_key=ck_a28470d1e5102f9afb461de8b87decb1fa2c9501&consumer_secret=cs_3e6b011c13c51129ddc74a5c1d7cd1074eb397a5";

export const ClientGetProductsPerPage = (auth, page, per_page) => {
  return async (dispatch) => {
    console.log("in reQUEST GET ALL Products");
    const request = {
      url:
        woocommerce_server_url +
        "products" +
        woocommerce_customer_signature +
        "&page=" +
        page +
        "&per_page=" +
        per_page,
      method: "GET",
      body: {
        per_page: "" + per_page,
        page: "" + page,
        headers: { Authorization: auth },
      },
    };
    console.log("page :" + page + " ,per page :" + per_page);

    try {
      axios
        .get(request.url)
        .then((response) => {
          console.log("GetAll products success data :", response);
          dispatch({
            type: ActionTypes.CLIENT_GET_PRODUCT_PER_PAGE_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.CLIENT_GET_PRODUCT_PER_PAGE_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.CLIENT_GET_PRODUCT_PER_PAGE_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const ClientGetDetailProduct = (auth, id) => {
  return async (dispatch) => {
    console.log("in reQUEST GET DetailProduct");
    try {
      const request = {
        url:
          woocommerce_server_url +
          "products/" +
          id +
          woocommerce_customer_signature,
        method: "GET",
      };

      axios
        .get(request.url)
        .then((response) => {
          console.log("ClientGetDetailProduct success data :", response.data);
          dispatch({
            type: ActionTypes.CLIENT_GET_DETAIL_PRODUCT_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.CLIENT_GET_DETAIL_PRODUCT_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.CLIENT_GET_DETAIL_PRODUCT_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const ClientGetAllProducts = (auth) => {
  return async (dispatch) => {
    console.log("in reQUEST GET ALL Products");
    const request = {
      url:
        woocommerce_server_url +
        "products" +
        woocommerce_customer_signature +
        "&per_page=100",
    };

    try {
      axios
        .get(request.url)
        .then((response) => {
          console.log("GetAll products success data :", response);
          dispatch({
            type: ActionTypes.CLIENT_GET_ALL_PRODUCT_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.CLIENT_GET_ALL_PRODUCT_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.CLIENT_GET_ALL_PRODUCT_FAILURE,
        payload: { errors: error },
      });
    }
  };
};
