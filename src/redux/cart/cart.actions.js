import { CartActionTypes } from "./cart.types";

export const toggleCartDropdownAction = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
