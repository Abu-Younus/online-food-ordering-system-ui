import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST } from "./ActionType"

/* menu item reducer initial state */
const initialState = {
    menuItems: [],
    loading: false,
    error: null,
    message: null,
    search: []
}

/* menu item reducer start */
const menuItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MENU_ITEM_REQUEST:
        case GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case DELETE_MENU_ITEM_REQUEST:
        case SEARCH_MENU_ITEM_REQUEST:
        case UPDATE_MENU_ITEM_AVAILABILITY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            }

        case CREATE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: [...state.menuItems, action.payload],
                message: "Food created successfully!"
            }

        case GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: action.payload
            }

        case DELETE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: state.menuItems.filter(
                    (item) => item.id !== action.payload
                )
            }

        case GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: state.menuItems.map(
                    (item) => item.id === action.payload.id ? action.payload : item
                )
            }

        case SEARCH_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                search: action.payload
            }

        case CREATE_MENU_ITEM_FAILURE:
        case GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
        case DELETE_MENU_ITEM_FAILURE:
        case SEARCH_MENU_ITEM_FAILURE:
        case UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: null
            }

        default:
            return state
    }
}
/* menu item reducer end */

export default menuItemReducer