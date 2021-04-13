import React from "react";
import * as ActionTypes from "../Actions/index";

const productState = {
  allProducts: [],
  detailProduct: {},
};

export default function Product(state = productState, action = {}) {
  switch (action.type) {
    case ActionTypes.CLIENT_GET_ALL_PRODUCT:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    /******************************************* */
    case ActionTypes.CLIENT_GET_DETAIL_PRODUCT:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        detailProduct: action.payload,
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_DETAIL_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    /******************************************* */
    default:
      return state;
  }
}
