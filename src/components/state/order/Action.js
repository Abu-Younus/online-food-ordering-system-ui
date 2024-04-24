
import { api } from "../../config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_NOTIFICATION_FAILURE, GET_USER_NOTIFICATION_REQUEST, GET_USER_NOTIFICATION_SUCCESS, GET_USER_ORDERS_FAILURE, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS } from "./ActionType"

/* create order action function */
export const createOrder = (requestData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST})
        try {
            const {data} = await api.post("/api/order", requestData.order, {
                headers: {
                    Authorization: `Bearer ${requestData.jwt}`
                }
            })
            if(data.payment_url) {
                window.location.href = data.payment_url
            }
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: CREATE_ORDER_FAILURE, payload: error})
        }
    }
}

/* get user orders action function */
export const getUserOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USER_ORDERS_REQUEST})
        try {
            const {data} = await api.get("/api/order/user", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_USER_ORDERS_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_USER_ORDERS_FAILURE, payload: error})
        }
    }
}

/* get user notification action function */
export const getUserNotifications = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USER_NOTIFICATION_REQUEST})
        try {
            const {data} = await api.get("/api/user/notifications", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_USER_NOTIFICATION_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_USER_NOTIFICATION_FAILURE, payload: error})
        }
    }
}