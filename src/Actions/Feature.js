import axios from "axios";
import { useHistory } from "react-router";
import { SERVER_URL } from "../constants/BackendConstants";
import * as ActionTypes from "./index";

export const GetAllFeatures = (auth) => {
  return async (dispatch) => {
    console.log("in reQUEST GET ALL FEATURES");
    try {
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
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.GET_ALL_FEATURE_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const GetAllGroupeName = (auth) => {
  return async (dispatch) => {
    try {
      axios
        .get(SERVER_URL + "api/features/get_all_groupe_name", {
          headers: { Authorization: auth },
        })
        .then((response) => {
          console.log("GetAllGroupeName success data :", response.data);
          dispatch({
            type: ActionTypes.GET_ALL_GROUP_NAME_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.GET_ALL_GROUP_NAME_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.GET_ALL_GROUP_NAME_FAILURE,
        payload: { errors: error },
      });
    }
  };
};

export const AddFeature = (auth, data) => {
  return async (dispatch) => {
    try {
      axios
        .post(SERVER_URL + "api/features/create", data, {
          headers: { Authorization: auth },
        })
        .then((response) => {
          console.log("success data :", response.data);
          dispatch({
            type: ActionTypes.ADD_FEATURE_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.ADD_FEATURE_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.ADD_FEATURE_FAILURE,
        payload: { errors: error },
      });
    }
  };
};
