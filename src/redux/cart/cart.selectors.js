import { createSelector } from "reselect";

const selectCart = (state) => state.cartDropdown;

// * memoized selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cartDropdown) => cartDropdown.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cartDropdown) => cartDropdown.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
