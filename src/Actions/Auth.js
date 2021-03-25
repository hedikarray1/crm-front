import axios from "axios";
import { useHistory } from "react-router";
import { SERVER_URL } from "../constants/BackendConstants";
import * as ActionTypes from "./index";

export const LoginAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      let data = new FormData();
      data.append("email", userState.email);
      data.append("password", userState.password);
      axios
        .post(SERVER_URL + "login", data)
        .then((response) => {
          console.log("login response: ", response.data.Authorization);
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: { authorization: response.data.Authorization },
          });
          dispatch(GetCurrentUserDataWithToken(response.data.Authorization));
        })
        .catch((error) => {
          dispatch({
            type: ActionTypes.LOGIN_FAILURE,
            payload: {
              errors: "addresse électronique ou mot de passe incorrect",
            },
          });
        });
    } catch (error) {
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: { errors: "addresse électronique ou mot de passe incorrect" },
      });
    }
  };
};

export const LogoutAuth = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT });
  };
};

export const GetCurrentUserDataWithToken = (auth) => {
  return async (dispatch) => {
    try {
      axios
        .get(SERVER_URL + "api/users/profile", {
          headers: { Authorization: auth },
        })
        .then((response) => {
          dispatch({
            type: ActionTypes.GET_CURRENT_USER_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: ActionTypes.GET_CURRENT_USER_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CURRENT_USER_FAILURE,
        payload: { errors: error },
      });
    }
  };
};
