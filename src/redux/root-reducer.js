import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

// * represents the base reducer for all states of the app

export default combineReducers({ user: userReducer });
