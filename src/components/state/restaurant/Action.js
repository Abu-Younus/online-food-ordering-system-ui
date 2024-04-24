
import { api } from "../../config/api"
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENT_FAILURE, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANT_CATEGORY_REQUEST, GET_RESTAURANT_CATEGORY_SUCCESS, GET_RESTAURANT_EVENTS_FAILURE, GET_RESTAURANT_EVENTS_REQUEST, GET_RESTAURANT_EVENTS_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"

/* get all restaurant action function */
export const getAllRestaurants = (token) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_RESTAURANTS_REQUEST})
        try {
            const {data} = await api.get("/api/restaurants", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload: error})
        }
    }
}

/* get restaurant by id action function */
export const getRestaurantById = (requestData) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_ID_REQUEST})
        try {
            const response = await api.get(`/api/restaurants/${requestData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${requestData.jwt}`
                }
            })
            dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: error})
        }
    }
}

/* get restaurant by user id action function */
export const getRestaurantsByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_USER_ID_REQUEST})
        try {
            const {data} = await api.get("/api/admin/restaurants/user", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error})
        }
    }
}

/* create restaurant action function */
export const createRestaurant = (requestData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_RESTAURANT_REQUEST})
        try {
            const {data} = await api.post("/api/admin/restaurants/", requestData.data, {
                headers: {
                    Authorization: `Bearer ${requestData.jwt}`
                }
            })
            dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: CREATE_CATEGORY_FAILURE, payload: error})
        }
    }
}

/* update restaurant action function */
export const updateRestaurant = ({restaurantId, restaurantData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_REQUEST})
        try {
            const response = await api.put(`/api/admin/restaurants/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: UPDATE_RESTAURANT_FAILURE, payload: error})
        }
    }
}

/* delete restaurant action function */
export const deleteRestaurant = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_RESTAURANT_REQUEST})
        try {
            const response = await api.delete(`/api/admin/restaurants/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: DELETE_RESTAURANT_FAILURE, payload: error})
        }
    }
}

/* update restaurant status action function */
export const updateRestaurantStatus = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST})
        try {
            const response = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error})
        }
    }
}

/* create event action function */
export const createEvent = ({data, restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_EVENT_REQUEST})
        try {
            const response = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data , {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: CREATE_EVENT_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: CREATE_EVENT_FAILURE, payload: error})
        }
    }
}

/* get all event action function */
export const getAllEvents = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_EVENTS_REQUEST})
        try {
            const response = await api.get(`/api/events`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GET_ALL_EVENTS_FAILURE, payload: error})
        }
    }
}

/* delete event action function */
export const deleteEvent = ({eventId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_EVENT_REQUEST})
        try {
            const response = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: DELETE_EVENT_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: DELETE_EVENT_FAILURE, payload: error})
        }
    }
}

/* get restaurant events action function */
export const getRestaurantEvents = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_EVENTS_REQUEST})
        try {
            const response = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_RESTAURANT_EVENTS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GET_RESTAURANT_EVENTS_FAILURE, payload: error})
        }
    }
}

/* create category action function */
export const createCategory = ({requestData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_CATEGORY_REQUEST})
        try {
            const response = await api.post(`/api/admin/category`, requestData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: CREATE_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: CREATE_CATEGORY_FAILURE, payload: error})
        }
    }
}

/* get restaurant category action function */
export const getRestaurantCategory = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_CATEGORY_REQUEST})
        try {
            const response = await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error})
        }
    }
}
