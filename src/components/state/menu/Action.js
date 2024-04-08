import { api } from "../../config/api"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST, UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS } from "./ActionType"

/* create menu item action function */
export const createMenuItem = ({menu, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_MENU_ITEM_REQUEST})
        try {
            const {data} = await api.post("/api/admin/food/", menu, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: error})
        }
    }
}

/* get menu items by restaurant id action function */
export const getMenuItemsByRestaurantId = (requestData) => {
    return async (dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST})
        try {
            const {data} = await api.get(`/api/food/restaurant/${requestData.restaurantId}
            ?vegetarian=${requestData.vegetarian}&non_vegetarian=${requestData.nonVegetarian}
            &seasonal=${requestData.seasonal}&food_category=${requestData.foodCategory}`, {
                headers: {
                    Authorization: `Bearer ${requestData.jwt}`
                }
            })
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error})
        }
    }
}

/* search menu item action function */
export const searchMenuItem = ({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type: SEARCH_MENU_ITEM_REQUEST})
        try {
            const {data} = await api.get(`/api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: error})
        }
    }
}

/* get ingredients of menu item action function */
// export const getAllIngredientsOfMenuItem = (requestData) => {
//     return async (dispatch) => {
//         dispatch({type: SEARCH_MENU_ITEM_REQUEST})
//         try {
//             const {data} = await api.get(`/api/food/search?name=${keyword}`, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`
//                 }
//             })
//             dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data})
//         } catch (error) {
//             dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: error})
//         }
//     }
// }

/* update menu item availability action function */
export const updateMenuItemAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_MENU_ITEM_AVAILABILITY_REQUEST})
        try {
            const {data} = await api.put(`/api/admin/food/${foodId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, payload: error})
        }
    }
}

/* delete menu item action function */
export const deleteMenuItem = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_MENU_ITEM_REQUEST})
        try {
            const {data} = await api.delete(`/api/admin/food/${foodId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: DELETE_MENU_ITEM_FAILURE, payload: error})
        }
    }
}