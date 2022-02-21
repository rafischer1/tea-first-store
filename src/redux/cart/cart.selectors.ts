import { createSelector } from "reselect";
import { Cart, CartItem } from "./cart.interface";
import { RootState } from "../root-reducer";

const selectCart = (state: RootState) => state.cartDropdown;

// * memoized selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cartDropdown: Cart) => cartDropdown.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
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

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: number, item: CartItem) =>
      acc + (item.quantity ? item.quantity * item.price : 0),
    0
  )
);
