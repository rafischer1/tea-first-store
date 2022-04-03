import {
  addItemToCart,
  clearCart,
  clearItemFromCart,
  removeItemFromCart,
  toggleCartDropdownAction,
} from "./cart.actions";
import { CartActionTypes } from "./cart.types";
import mocks from "../../mocks/mock-types";

describe("Cart Actions", () => {
  it("should handle CLEAR_CART action", () => {
    const clearCartRes = clearCart();
    expect(clearCartRes).toEqual({
      type: CartActionTypes.CLEAR_CART,
    });
  });

  it("should handle CLEAR_ITEM action", () => {
    const clearCartRes = clearItemFromCart(mocks.mockCartItems[2]);
    expect(clearCartRes).toEqual({
      type: CartActionTypes.CLEAR_ITEM,
      payload: mocks.mockCartItems[2],
    });
  });

  it("should handle REMOVE_ITEM action", () => {
    const removeItemFromCartRes = removeItemFromCart(mocks.mockCartItems[0]);
    expect(removeItemFromCartRes).toEqual({
      type: CartActionTypes.REMOVE_ITEM,
      payload: mocks.mockCartItems[0],
    });
  });

  it("should handle ADD_ITEM action", () => {
    const addItemRes = addItemToCart(mocks.mockCartItems[1]);
    expect(addItemRes).toEqual({
      type: CartActionTypes.ADD_ITEM,
      payload: mocks.mockCartItems[1],
    });
  });

  it("should handle TOGGLE_CART_DROPDOWN action", () => {
    const res = toggleCartDropdownAction();
    expect(res).toEqual({
      type: CartActionTypes.TOGGLE_CART_DROPDOWN,
    });
  });
});
