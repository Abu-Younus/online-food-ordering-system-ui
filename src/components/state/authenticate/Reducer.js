import { isPresentInFavorites } from "../../config/logic";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

/* authentication reducer initial state */
const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}

/* authentication reducer start */
export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {
                ...state, 
                isLoading: true, 
                success: null, 
                error: null
            }

        case REGISTER_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                jwt: action.payload, 
                success: "Register Success"
            }

        case LOGIN_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                jwt: action.payload, 
                success: "Login Success"
            }

        case GET_USER_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                user: action.payload
            }

        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInFavorites(state.favorites, action.payload)
                ? state.favorites.filter((item) => item.id !== action.payload.id)
                : [...state.favorites, action.payload]
            }

        case LOGOUT:
            return initialState

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return {
                ...state, 
                isLoading: false, 
                success: null, 
                error: action.payload
            }
    
        default:
            return state;
    }
}
/* authentication reducer end */