import { LOGOUT } from "../authenticate/ActionType"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

/* cart reducer initial state */
const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null
}

/* cart reducer start */
const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_CART_REQUEST:
        case GET_ALL_CART_ITEMS_REQUEST:
        case ADD_ITEM_TO_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
        case CLEAR_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FIND_CART_SUCCESS:
        case CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cart: action.payload,
                cartItems: action.payload.items
            }

        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cartItems: [...state.cartItems, action.payload]
            }

        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cartItems: state.cartItems.map(
                    (item) => item.id === action.payload.id ? action.payload : item
                )
            }

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                )
            }

        case FIND_CART_FAILURE:
        case GET_ALL_CART_ITEMS_FAILURE:
        case ADD_ITEM_TO_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
        case REMOVE_CART_ITEM_FAILURE:
        case CLEAR_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case LOGOUT:
            localStorage.removeItem("jwt")
            return {
                ...state,
                cart: null,
                cartItems: [],
                success: "Logout Success!"
            }

        default:
            return state
    }
}
/* cart reducer end */

export default cartReducer