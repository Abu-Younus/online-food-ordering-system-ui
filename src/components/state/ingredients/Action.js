import { api } from "../../config/api"
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType"

/* get ingredients of restaurant action function */
export const getIngredientsOfRestaurant = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_INGREDIENTS, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}

/* create ingredient action function */
export const createIngredient = ({data, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_REQUEST})
        try {
            const response = await api.post(`/api/admin/ingredients`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: CREATE_INGREDIENT_FAILURE, payload: error})
        }
    }
}

/* create ingredient category action function */
export const createIngredientCategory = ({data, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST})
        try {
            const response = await api.post(`/api/admin/ingredients/category`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error})
        }
    }
}

/* get ingredient category action function */
export const getIngredientCategory = ({id, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST})
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error})
        }
    }
}

/* update stock of ingredient action function */
export const updateStockOfIngredient = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const {data} = await api.put(`/api/admin/ingredients/${id}/stock`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: UPDATE_STOCK, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}