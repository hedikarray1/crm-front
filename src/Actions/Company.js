import axios from "axios";
import { useHistory } from "react-router";
import { SERVER_URL } from "../constants/BackendConstants";
import * as ActionTypes from "./index";


export const getMyCompany =(authToken)=>{
    return async (dispatch)=>{
   
       try {
           let data=new FormData();
           data.append("email",userState.email);
           data.append("password",userState.password);
           axios.get(SERVER_URL+"api/companies/my_company",{headers:{"Authorization":authToken}}).then((response)=>{
   dispatch({type:ActionTypes.GET_CURRENT_USER_COMPANY_SUCCESS,payload:response.data});
   dispatch(GetCurrentUserDataWithToken(response.data.Authorization))
           }).catch((error)=>{
               dispatch({type:ActionTypes.GET_CURRENT_USER_COMPANY_FAILURE,payload:{errors:error}});
           }); 
           
          } catch (error) {
              dispatch({type:ActionTypes.GET_CURRENT_USER_COMPANY_FAILURE,payload:{errors:error}});
          }
    }
   
   }
