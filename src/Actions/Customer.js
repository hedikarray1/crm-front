import * as ActionTypes from "./index";
import { WP_JSON } from "../constants/BackendConstants";
import OAuth from "oauth-1.0a";
import axios from "axios";
import crypto from "crypto";

export const GetAllCustomers = (per_page, page) => {
  return async (dispatch) => {
    //   console.log("in reQUEST GET ALL FEATURES");
    const token = {
      key: "ck_2a88c024105b75fccb82d8252bcfe1060286007d",
      secret: "cs_7debf8ce3c6856df60415ecb2c130c1c6b60f022",
    };

    try {
      axios
        .get(
          WP_JSON +
            "wc/v3/customers?consumer_key=" +
            token.key +
            "&consumer_secret=" +
            token.secret +
            "&per_page=" +
            per_page +
            "&page=" +
            page,
          {}
        )
        .then((response) => {
          console.log("GetAllFeatures success data :", response);
          dispatch({
            type: ActionTypes.GET_ALL_CUSTOMERS_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.GET_ALL_CUSTOMERS_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.GET_ALL_CUSTOMERS_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const DeleteCustomer = (id, per_page, page) => {
  return async (dispatch) => {
    //   console.log("in reQUEST GET ALL FEATURES");
    const token = {
      key: "ck_2a88c024105b75fccb82d8252bcfe1060286007d",
      secret: "cs_7debf8ce3c6856df60415ecb2c130c1c6b60f022",
    };

    try {
      axios
        .delete(
          WP_JSON +
            "wc/v3/customers/" +
            id +
            "?force=true&consumer_key=" +
            token.key +
            "&consumer_secret=" +
            token.secret,
          {}
        )
        .then((response) => {
          console.log("Delete customer data :", response);
          dispatch({
            type: ActionTypes.DELETE_CUSTOMER_SUCCESS,
            payload: response,
          });
          dispatch(GetAllCustomers(per_page, page));
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.DELETE_CUSTOMER_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.DELETE_CUSTOMER_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const AddCustomer = (customer) => {
  return async (dispatch) => {
    //   console.log("in reQUEST GET ALL FEATURES");
    const token = {
      key: "ck_2a88c024105b75fccb82d8252bcfe1060286007d",
      secret: "cs_7debf8ce3c6856df60415ecb2c130c1c6b60f022",
    };

    try {
      axios
        .post(
          WP_JSON +
            "wc/v3/customers?consumer_key=" +
            token.key +
            "&consumer_secret=" +
            token.secret,
          customer
        )
        .then((response) => {
          console.log("add customer data :", response);
          dispatch({
            type: ActionTypes.ADD_CUSTOMER_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.ADD_CUSTOMER_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.ADD_CUSTOMER_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const UpdateCustomer = (id, customer) => {
  return async (dispatch) => {
    //   console.log("in reQUEST GET ALL FEATURES");
    const token = {
      key: "ck_2a88c024105b75fccb82d8252bcfe1060286007d",
      secret: "cs_7debf8ce3c6856df60415ecb2c130c1c6b60f022",
    };

    try {
      axios
        .put(
          WP_JSON +
            "wc/v3/customers/" +
            id +
            "?consumer_key=" +
            token.key +
            "&consumer_secret=" +
            token.secret,
          customer
        )
        .then((response) => {
          console.log("add customer data :", response);
          dispatch({
            type: ActionTypes.UPDATE_CUSTOMER_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.UPDATE_CUSTOMER_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.UPDATE_CUSTOMER_FAILURE,
        payload: { errors: error },
      });
    }
  };
};
