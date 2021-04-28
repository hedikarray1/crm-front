import axios from "axios";
import { WP_JSON } from "../constants/BackendConstants";
import * as ActionTypes from "./index";

export const RequestTokenuploadPictureToServer= (username, password,file,title,caption) => {
    return async (dispatch) => {
      
      let data = new FormData();
      data.append("username", username);
      data.append("password", password);
      data.append("file", file);
      data.append("title", title);
      data.append("caption", caption);
  
      try {

        axios
          .post(WP_JSON+"jwt-auth/v1/token",data)
          .then((response) => {
           // console.log("Get All categories success data :", response);
            dispatch({
              type: ActionTypes.CATEGORY_UPLOAD_PICTURE_TOKEN_SUCCESS,
              payload: response.data.token,
            });
            dispatch(uploadPictureToServer(response.data.token,file, title, caption));
          })
          .catch((error) => {
            console.log("error :", error);
            dispatch({
              type: ActionTypes.CATEGORY_UPLOAD_PICTURE_TOKEN_FAILURE,
              payload: { errors: error },
            });
          });
      } catch (error) {
        console.log("error :", error);
        dispatch({
          type: ActionTypes.CATEGORY_UPLOAD_PICTURE_TOKEN_FAILURE,
          payload: { errors: error },
        });
      }
    };
  };

export const uploadPictureToServer  = (token,file, title, caption) => {
    return async (dispatch) => {
      console.log("in reQUEST GET ALL categories");
      const request = {
        url:
        WP_JSON +
          "wp/v2/media" 
      };
  
      try {

        let data = new FormData();
        data.append("file", file);
        data.append("title", title);
        data.append("caption", caption);

        axios
          .post(request.url, data,{headers:{"Authorization":"Bearer "+token}})
          .then((response) => {
            console.log("add picture result :", response);
            dispatch({
              type: ActionTypes.CATEGORY_UPLOAD_PICTURE_SUCCESS,
              payload: response,
            });
          })
          .catch((error) => {
            console.log("error :", error);
            dispatch({
              type: ActionTypes.CATEGORY_UPLOAD_PICTURE_FAILURE,
              payload: { errors: error },
            });
          });
      } catch (error) {
        console.log("error :", error);
        dispatch({
          type: ActionTypes.CATEGORY_UPLOAD_PICTURE_FAILURE,
          payload: { errors: error },
        });
      }
    };
  };

  export const getAllPictures=(per_page,page)=>{
      return async(dispatch)=>{

        axios.get(WP_JSON+ "wp/v2/media?per_page="+per_page +"&page="+page,{}).then((response)=>{
            dispatch({
                type: ActionTypes.GET_ALL_PICTURES_SUCCESS,
                payload: response,
              });
        }).catch((error)=>{
            dispatch({type:ActionTypes.GET_ALL_PICTURES_FAILURE,errors:error})
        })
      }
  }