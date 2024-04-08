import { api } from "../../config/api"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

/* find cart action function */
export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type: FIND_CART_REQUEST})
        try {
            const {data} = await api.get("/api/cart", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: FIND_CART_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: FIND_CART_FAILURE, payload: error})
        }
    }
}

/* get all cart items action function */
export const getAllCartItems = (requestData) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST})
        try {
            const {data} = await api.get(`/api/carts/${requestData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${requestData.token}`
                }
            })
            dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload: error})
        }
    }
}

/* add item to cart action function */
export const addItemToCart = (requestData) => {
    return async (dispatch) => {
        dispatch({type: ADD_ITEM_TO_CART_REQUEST})
        try {
            const {data} = await api.put(`/api/cart/add`, requestData.cartItem, {
                headers: {
                    Authorization: `Bearer ${requestData.token}`
                }
            })
            dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error})
        }
    }
}

/* update cart item action function */
export const updateCartItem = (requestData) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_CART_ITEM_REQUEST})
        try {
            const {data} = await api.put(`/api/cart-item/update`, requestData.data, {
                headers: {
                    Authorization: `Bearer ${requestData.token}`
                }
            })
            dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: error})
        }
    }
}

/* remove cart item action function */
export const removeCartItem = ({cartItemId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: REMOVE_CART_ITEM_REQUEST})
        try {
            const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: error})
        }
    }
}

/* clear cart item action function */
export const clearCartItem = () => {
    return async (dispatch) => {
        dispatch({type: CLEAR_CART_REQUEST})
        try {
            const {data} = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            dispatch({type: CLEAR_CART_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: CLEAR_CART_FAILURE, payload: error})
        }
    }
}