import React from "react";
import * as ActionTypes from "../Actions/index";

const pictureState ={
  allPictures: [],
  totalPictures: 0,
  totalPagesPictures: 0,
};

export default function Category(state = pictureState, action = {}) {
  switch (action.type) {
  
      case ActionTypes.CATEGORY_UPLOAD_PICTURE_SUCCESS:
        return {
          ...state,
    
          loading: false,
        };
      case ActionTypes.CATEGORY_UPLOAD_PICTURE_FAILURE:
        return {
          ...state,
          loading: false,
          errors: action.payload.errors,
        };
        case ActionTypes.CATEGORY_UPLOAD_PICTURE_TOKEN_SUCCESS:
            return {
            ...state,
              loading: false,
             
            };
          case ActionTypes.CATEGORY_UPLOAD_PICTURE_TOKEN_FAILURE:
            return {
              ...state,
              loading: false,
              errors: action.payload.errors,
            };

            case ActionTypes.GET_ALL_PICTURES_SUCCESS:
                return {
                ...state,
                  loading: false,
                  allPictures:action.payload.data,
                  totalPictures:action.payload.headers["x-wp-total"],
                  totalPagesPictures:action.payload.headers["x-wp-totalpages"]
                 
                };
              case ActionTypes.GET_ALL_PICTURES_FAILURE:
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