import { CartActionTypes } from "./cart.types";
import { CartUtils } from "./cart.utils";
import { AnyAction } from "redux";
import { CartItem } from "./cart.interface";

const INITIAL_STATE = { hidden: true, cartItems: [] as CartItem[] };

const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: CartUtils.addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: CartUtils.clearItemFromCart(
          state.cartItems,
          action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: CartUtils.removeItemFromCart(
          state.cartItems,
          action.payload
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default cartReducer;
