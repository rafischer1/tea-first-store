import { AnyAction, combineReducers } from "redux";
import { SHOP_DATA } from "../redux/shop/shop.data";
import { directoryData } from "../redux/directory/directory.data";
import { DirectorySection } from "../redux/directory/directory.interface";
import { CartItem } from "../redux/cart/cart.interface";
import { UserActionTypes } from "../redux/user/user.types";

const mockShopReducer = (
  state = { collections: SHOP_DATA },
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mockUserReducer = (
  state = {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  action: AnyAction
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_IN_FAILED:
    case UserActionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

const mockDirectoryReducer = (
  state: { sections: DirectorySection[] } = { sections: directoryData },
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mockCartReducer = (
  state = { hidden: true, cartItems: [] as CartItem[] },
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const mockRootReducer = combineReducers({
  user: mockUserReducer,
  directory: mockDirectoryReducer,
  cartDropdown: mockCartReducer,
  shop: mockShopReducer,
});

export type MockRootState = ReturnType<typeof mockRootReducer>;
