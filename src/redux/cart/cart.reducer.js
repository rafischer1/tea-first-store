import { CartActionTypes } from "./cart.types";
import { cartUtils } from "./cart.utils";

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: cartUtils.addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: cartUtils.clearItemFromCart(
          state.cartItems,
          action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: cartUtils.removeItemFromCart(
          state.cartItems,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
