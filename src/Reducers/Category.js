import React from "react";
import * as ActionTypes from "../Actions/index";

const categoryState = {
  allCategories: [],
  totalCategory: 0,
  totalPagesCategory: 0,
};

export default function Category(state = categoryState, action = {}) {
  switch (action.type) {
    case ActionTypes.CLIENT_GET_ALL_CATEGORY:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        allCategories: action.payload.data,
        totalCategory: action.payload.headers["x-wp-total"],
        totalPagesCategory: action.payload.headers["x-wp-totalpages"],
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_CATEGORY_FAILURE:
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
