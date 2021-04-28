import axios from "axios";
import * as ActionTypes from "./index";

const woocommerce_server_url =
  "https://stupefied-johnson.51-210-46-0.plesk.page/wp-json/wc/v3/";
const woocommerce_customer_signature =
  "?consumer_key=ck_a28470d1e5102f9afb461de8b87decb1fa2c9501&consumer_secret=cs_3e6b011c13c51129ddc74a5c1d7cd1074eb397a5";

export const ClientGetAllCategories = (auth, page, per_page) => {
  return async (dispatch) => {
    console.log("in reQUEST GET ALL categories");
    const request = {
      url:
        woocommerce_server_url +
        "products/categories" +
        woocommerce_customer_signature +
        "&page=" +
        page +
        "&per_page=" +
        per_page,
      method: "GET",
    };

    try {
      axios
        .get(request.url)
        .then((response) => {
          console.log("Get All categories success data :", response);
          dispatch({
            type: ActionTypes.CLIENT_GET_ALL_CATEGORY_SUCCESS,
            payload: response,
          });
        })
        .catch((error) => {
          console.log("error :", error);
          dispatch({
            type: ActionTypes.CLIENT_GET_ALL_CATEGORY_FAILURE,
            payload: { errors: error },
          });
        });
    } catch (error) {
      console.log("error :", error);
      dispatch({
        type: ActionTypes.CLIENT_GET_ALL_CATEGORY_FAILURE,
        payload: { errors: error },
      });
    }
  };
};
