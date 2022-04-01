import React from "react";
import CartItemComponent from "./cart-item.component";
import mocks from "../../mocks/mock-types";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { render } from "@testing-library/react";

describe("CartItem Component", () => {
  it("Renders item prop", () => {
    const wrapper = render(
      <Provider store={store}>
        <CartItemComponent item={mocks.mockCartItems[1]} />
      </Provider>
    );
    console.log("KBDFKAJSND::", wrapper.findAllByPlaceholderText("span.name"));
    // expect(wrapper.find("span.name")["0"].data());
  });
});
