import axios from "axios";
import { useHistory } from "react-router";
import { SERVER_URL } from "../constants/BackendConstants";
import * as ActionTypes from "./index";


export const getMyCompany =(authToken)=>{
    return async (dispatch)=>{
   console.log("in get company function")
       try {
         
          
           axios.get(SERVER_URL+"api/companies/my_company",{headers:{"Authorization":authToken}}).then((response)=>{
               console.log("data: ",response.data)
   dispatch({type:ActionTypes.GET_CURRENT_USER_COMPANY_SUCCESS,payload:response.data});
           }).catch((error)=>{
               dispatch({type:ActionTypes.GET_CURRENT_USER_COMPANY_FAILURE,payload:{errors:error}});
           }); 
           
          } catch (error) {
              dispatch({type:ActionTypes.GET_CURRENT_USER_COMPANY_FAILURE,payload:{errors:error}});
          }
    }
   
   }
