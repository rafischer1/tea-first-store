import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// * represents the base reducer for all states of the app

export default combineReducers({
  user: userReducer,
  cartDropdown: cartReducer,
});
