import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartDropdown"],
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  cartDropdown: cartReducer,
  shop: shopReducer,
});

// * represents the base reducer for all states of the app
export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
