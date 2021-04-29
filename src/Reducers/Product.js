import React from "react";
import * as ActionTypes from "../Actions/index";

const productState = {
  allProducts: [],
  totalProducts: 0,
  totalPages: 0,
  detailProduct: {},
};

export default function Product(state = productState, action = {}) {
  switch (action.type) {
    case ActionTypes.CLIENT_GET_PRODUCT_PER_PAGE:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_PRODUCT_PER_PAGE_SUCCESS:
      return {
        ...state,
        allProducts: action.payload.data,
        totalProducts: action.payload.headers["x-wp-total"],
        totalPages: action.payload.headers["x-wp-totalpages"],
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_PRODUCT_PER_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    /******************************************* */
    case ActionTypes.CLIENT_GET_ALL_PRODUCT:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload.data,
        totalProducts: action.payload.headers["x-wp-total"],
        totalPages: action.payload.headers["x-wp-totalpages"],
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
     case ActionTypes.WOOCOMMERCE_ADD_PRODUCT:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.WOOCOMMERCE_ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.WOOCOMMERCE_ADD_PRODUCT_FAILURE:
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
