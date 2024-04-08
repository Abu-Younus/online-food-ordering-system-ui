import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType"

/* ingredient reducer initial state */
const initialState = {
    ingredients: [],
    category: [],
    update: null,
    loading: false,
    error: null
}

/* ingredient reducer start */
const ingredientReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_INGREDIENT_REQUEST:
        case CREATE_INGREDIENT_CATEGORY_REQUEST:
        case GET_INGREDIENT_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case GET_INGREDIENTS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredients: action.payload
            }

        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                category: action.payload
            }

        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                category: [...state.category, action.payload]
            }

        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredients: [...state.ingredients, action.payload]
            }

        case UPDATE_STOCK:
            return {
                ...state,
                loading: false,
                error: null,
                update: action.payload,
                ingredients: state.ingredients.map(
                    (item) => item.id === action.payload.id ? action.payload : item
                )
            }

        case CREATE_INGREDIENT_FAILURE:
        case CREATE_INGREDIENT_CATEGORY_FAILURE:
        case GET_INGREDIENT_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}
/* ingredient reducer end */

export default ingredientReducer