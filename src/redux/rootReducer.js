import { combineReducers } from "redux";
import itemReducer from "./products/itemReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    products: itemReducer,
    carts: cartReducer,
});

export default rootReducer;
