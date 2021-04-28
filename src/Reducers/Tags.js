import React from "react";
import * as ActionTypes from "../Actions/index";

const tagsState = {
  allTags: [],
  totalTags: 0,
  totalPagesTags: 0,
};

export default function Tags(state = tagsState, action = {}) {
  switch (action.type) {
    case ActionTypes.CLIENT_GET_ALL_TAGS:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_TAGS_SUCCESS:
      return {
        ...state,
        allTags: action.payload.data,
        totalTags: action.payload.headers["x-wp-total"],
        totalPagesTags: action.payload.headers["x-wp-totalpages"],
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.CLIENT_GET_ALL_TAGS_FAILURE:
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
