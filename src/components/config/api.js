import axios from "axios"


/* backend api base url */
export const API_URL = "http://localhost:8090"

/* axios create function */
export const api = axios.create({
    baseURL: API_URL,
    Headers: {
        "Content-Type": "application/json"
    }
})