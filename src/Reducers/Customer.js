import * as ActionTypes from "../Actions/index"

const customerState = {
    customers: [],
    loading: false,
    errors: null

}

export default function Customer(state = customerState, action = {}) {
    switch (action.type) {
        case ActionTypes.GET_ALL_CUSTOMERS_SUCCESS:
            return { ...state, errors: null, customers: action.payload.data, total: action.payload.headers["x-wp-total"], total_pages: action.payload.headers["x-wp-totalpages"], loading: false }
            break;

        case ActionTypes.GET_ALL_CUSTOMERS_FAILURE:
            return { ...state, errors: action.payload.errors, loading: false }
            break;
            case ActionTypes.DELETE_CUSTOMER_SUCCESS:
                return { ...state, errors: null, loading: false }
                break;
    
            case ActionTypes.DELETE_CUSTOMER_FAILURE:
                return { ...state, errors: action.payload.errors, loading: false }
                break;

                case ActionTypes.ADD_CUSTOMER_SUCCESS:
                    return { ...state, errors: null, loading: false }
                    break;
        
                case ActionTypes.ADD_CUSTOMER_FAILURE:
                    return { ...state, errors: action.payload.errors, loading: false }
                    break;
                    case ActionTypes.UPDATE_CUSTOMER_SUCCESS:
                        return { ...state, errors: null, loading: false }
                        break;
            
                    case ActionTypes.UPDATE_CUSTOMER_FAILURE:
                        return { ...state, errors: action.payload.errors, loading: false }
                        break;
    
        default:
            return state;
    }
}
