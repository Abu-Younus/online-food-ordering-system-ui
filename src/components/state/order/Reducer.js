import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_NOTIFICATION_FAILURE, GET_USER_NOTIFICATION_REQUEST, GET_USER_NOTIFICATION_SUCCESS, GET_USER_ORDERS_FAILURE, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS } from "./ActionType"

/* order reducer initial state */
const initialState = {
    orders: [],
    loading: false,
    error: null,
    notifications: []
}

/* order reducer start */
const orderReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case CREATE_ORDER_REQUEST:
        case GET_USER_ORDERS_REQUEST:
        case GET_USER_NOTIFICATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders: payload
            }

        case GET_USER_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders: payload
            }

        case GET_USER_NOTIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                notifications: payload
            }

        case CREATE_ORDER_FAILURE:
        case GET_USER_ORDERS_FAILURE:
        case GET_USER_NOTIFICATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}
/* order reducer end */

export default orderReducer