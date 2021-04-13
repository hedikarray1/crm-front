import axios from "axios";
import { useHistory } from "react-router";
import { SERVER_URL } from "../constants/BackendConstants";
import { productData } from "../Data/ProductData";
import * as ActionTypes from "./index";

export const ClientGetAllProducts = (auth) => {
  return async (dispatch) => {
    console.log("in reQUEST GET ALL Products");
    try {
      dispatch({
        type: ActionTypes.CLIENT_GET_ALL_PRODUCT_SUCCESS,
        payload: productData,
      });
      /*
      axios
        .get(SERVER_URL + "api/features/get_all", {
          headers: { Authorization: auth },
        })
        .then((response) => {
          console.log("GetAllFeatures success data :", response.data);
          dispatch({
            type: ActionTypes.GET_ALL_FEATURE_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.GET_ALL_FEATURE_FAILURE,
            payload: { errors: error },
          });
        });*/
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.CLIENT_GET_ALL_PRODUCT_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const ClientGetDetailProduct = (auth, id) => {
  return async (dispatch) => {
    console.log("in reQUEST GET DetailProduct");
    try {
      let pp = productData.find((p) => p.id == id);
      dispatch({
        type: ActionTypes.CLIENT_GET_DETAIL_PRODUCT_SUCCESS,
        payload: pp,
      });
      /*
        axios
          .get(SERVER_URL + "api/features/get_all", {
            headers: { Authorization: auth },
          })
          .then((response) => {
            console.log("GetAllFeatures success data :", response.data);
            dispatch({
              type: ActionTypes.GET_ALL_FEATURE_SUCCESS,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.log("error :", error);
            dispatch({
              type: ActionTypes.GET_ALL_FEATURE_FAILURE,
              payload: { errors: error },
            });
          });*/
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.CLIENT_GET_DETAIL_PRODUCT_FAILURE,
        payload: { errors: error },
      });
    }
  };
};
