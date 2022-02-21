import { CartActionTypes } from "./cart.types";
import { CartUtils } from "./cart.utils";

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
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
