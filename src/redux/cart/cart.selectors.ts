import { createSelector, Selector } from "reselect";
import { Cart, CartItem } from "./cart.interface";
import { RootState } from "../root-reducer";

const selectCart = (state: RootState) => state.cartDropdown;

// * memoized selectors
export const selectCartItems: Selector = createSelector(
  [selectCart],
  (cartDropdown: Cart) => cartDropdown.cartItems
);

// @ts-ignore
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce(
      (acc: number, item: CartItem) =>
        acc + (item.quantity ? item.quantity : 0),
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cartDropdown: Cart) => cartDropdown.hidden
);

// @ts-ignore
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce(
      (acc: number, item: CartItem) =>
        acc + (item.quantity ? item.quantity * item.price : 0),
      0
    )
);
