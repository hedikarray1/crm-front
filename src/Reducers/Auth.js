

import { useHistory } from "react-router";
import * as ActionTypes from "../Actions/index"

const authtate={
    isLoggedIn:false,
    Authorization:localStorage.getItem("Authorization"),
 current_user:null,
 loading:false
}


export default function Auth(state=authtate,action={}){

    switch (action.type) {
      case ActionTypes.LOGIN:
        return {
            ...state,
            loading: true,
            errors: action.error ? action.payload.errors : null
          };
    
          case ActionTypes.LOGIN_SUCCESS:
          localStorage.setItem("Authorization",action.payload.authorization)
          return {
               
            ...state,
            Authorization:action.payload.authorization,
            loading: false,
            isLoggedIn:true,

            errors: action.error ? action.payload.errors : null
              };
              case ActionTypes.LOGIN_FAILURE:
                return {
                    ...state,
                    loading: false,
                    isLoggedIn:false,
                    errors: action.payload.errors
                  };
        
                  case ActionTypes.GET_CURRENT_USER_SUCCESS:
                  
                    return {
                        ... state,
                        current_user:action.payload,
          
                          loading: false,
                          isLoggedIn:true,
          
                          errors: action.error ? action.payload.errors : null
                        };
                        case ActionTypes.GET_CURRENT_USER_FAILURE:
                          return {
                              ...state,
                              loading: false,
                              
                              errors: action.payload.errors
                            };

                            case ActionTypes.LOGOUT:
                              

                                return {
                                    
                                  };
                  

        
        default:
            return state;
            break;
    }
}