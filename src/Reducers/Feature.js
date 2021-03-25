import * as ActionTypes from "../Actions/index";

const featureState = {
  features: [],
  groupNames: [],
};

export default function Feature(state = featureState, action = {}) {
  switch (action.type) {
    case ActionTypes.GET_ALL_FEATURE:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.GET_ALL_FEATURE_SUCCESS:
      return {
        features: action.payload,
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.GET_ALL_FEATURE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    /*************************************** */
    case ActionTypes.ADD_FEATURE:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.ADD_FEATURE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.ADD_FEATURE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        errors: action.payload.errors,
      };
    /******************************************* */
    case ActionTypes.GET_ALL_GROUP_NAME:
      return {
        ...state,
        loading: true,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.GET_ALL_GROUP_NAME_SUCCESS:
      return {
        groupNames: action.payload,
        loading: false,
        errors: action.error ? action.payload.errors : null,
      };
    case ActionTypes.GET_ALL_GROUP_NAME_FAILURE:
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
