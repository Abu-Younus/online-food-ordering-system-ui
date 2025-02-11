import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { api } from "../../config/api"


/* register user action function */
export const registerUser = (requestData) => async (dispatch) => {
    dispatch({type: REGISTER_REQUEST})
    try {
        const {data} = await api.post(`/auth/signup`, requestData.userData)
        if(data.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }
        if(data.role === "ROLE_RESTAURANT_OWNER") {
            requestData.navigate("/admin/restaurant")
        } else {
            requestData.navigate("/")
        }

        dispatch({type: REGISTER_SUCCESS, payload: requestData.jwt})

    } catch (error) {
        dispatch({type: REGISTER_FAILURE, payload: error})
        console.log("error", error)
    }
}

/* login user action function */
export const loginUser = (requestData) => async (dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await api.post(`/auth/signin`, requestData.userData)
        if(data.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }
        if(data.role === "ROLE_RESTAURANT_OWNER") {
            requestData.navigate("/admin/restaurant")
        } else {
            requestData.navigate("/")
        }

        dispatch({type: LOGIN_SUCCESS, payload: requestData.jwt})

    } catch (error) {
        dispatch({type: LOGIN_FAILURE, payload: error})
        console.log("error", error)
    }
}

/* user data get action function */
export const getUser = (jwt) => async (dispatch) => {
    dispatch({type: GET_USER_REQUEST})
    try {
        const {data} = await api.get("/api/users/profile", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({type: GET_USER_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: GET_USER_FAILURE, payload: error})
        console.log("error", error)
    }
}

/* add to favorite action function */
export const addToFavorite = ({restaurantId, jwt}) => async (dispatch) => {
    dispatch({type: ADD_TO_FAVORITE_REQUEST})
    try {
        const {data} = await api.put(`/api/restaurants/${restaurantId}/add-to-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({type: ADD_TO_FAVORITE_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: ADD_TO_FAVORITE_FAILURE, payload: error})
        console.log("error", error)
    }
}

/* logout action function */
export const logout = () => async (dispatch) => {
    try {
        localStorage.clear()
        dispatch({type: LOGOUT})

    } catch (error) {
        console.log("error", error)
    }
}