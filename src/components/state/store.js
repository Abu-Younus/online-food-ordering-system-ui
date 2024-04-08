import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authenticate/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./restaurant/Reducer";
import menuItemReducer from "./menu/Reducer";
import cartReducer from "./cart/Reducer";
import orderReducer from "./order/Reducer";
import restaurantOrderReducer from "./restaurant-order/Reducer";
import ingredientReducer from "./ingredients/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantOrderReducer,
    ingredients: ingredientReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))