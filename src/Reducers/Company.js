import * as ActionTypes from "../Actions/index"

const companyState={
    loading:false,
    my_company=null,
    all_companies=[],
    selected_company=null,
    errors:null
}

export default function Company(state=companyState,action={}){
    switch (action.type) {
        case ActionTypes.GET_CURRENT_USER_COMPANY_SUCCESS:
            return{...state,my_company:action.payload,loading:false}
            break;
    
            case ActionTypes.GET_CURRENT_USER_COMPANY_FAILURE:
                return{...state,errors:action.payload.errors,loading:false}
                break;
    }

} 