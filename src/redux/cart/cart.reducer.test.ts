import { CartActionTypes } from "./cart.types";
import cartReducer from "./cart.reducer";
import mocks from "../../mocks/mock-types";

describe("Cart Reducer", () => {
  it("should toggle cartDropdown state", () => {
    expect(
      cartReducer(
        { hidden: false, cartItems: [] },
        { type: CartActionTypes.TOGGLE_CART_DROPDOWN }
      )
    ).toEqual({ hidden: true, cartItems: [] });
  });

  it("should add item to cart", () => {
    expect(
      cartReducer(
        {
          hidden: false,
          cartItems: [],
        },
        { type: CartActionTypes.ADD_ITEM, payload: mocks.mockCartItems[2] }
      )
    ).toEqual({
      hidden: false,
      cartItems: [{ ...mocks.mockCartItems[2], quantity: 1 }],
    });
  });

  it("should remove item from cart", () => {
    expect(
      cartReducer(
        {
          hidden: false,
          cartItems: [mocks.mockCartItems[1]],
        },
        { type: CartActionTypes.CLEAR_ITEM, payload: mocks.mockCartItems[1] }
      )
    ).toEqual({
      hidden: false,
      cartItems: [],
    });
  });

  it("should clear cart", () => {
    expect(
      cartReducer(
        {
          hidden: false,
          cartItems: mocks.mockCartItems,
        },
        { type: CartActionTypes.CLEAR_CART }
      )
    ).toEqual({
      hidden: true,
      cartItems: [],
    });
  });
});
