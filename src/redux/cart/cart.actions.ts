import { CartActionTypes } from "./cart.types";
import { CartItem } from "./cart.interface";
// import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const toggleCartDropdownAction = (): { type: string } => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = (
  item: CartItem
): { payload: CartItem; type: string } => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (
  item: CartItem
): { payload: CartItem; type: string } => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const clearCart = (): { type: string } => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeItemFromCart = (
  item: CartItem
): { payload: CartItem; type: string } => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

// export type ToggleCartDropdownActive =
//   ActionCreatorWithPayload<CartActionTypes.TOGGLE_CART_DROPDOWN>;
