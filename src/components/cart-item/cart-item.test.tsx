import React from "react";
import CartItemComponent from "./cart-item.component";
import mocks from "../../mocks/mock-types";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { mockStore } from "../../mocks/mock-store";

describe("CartItem Component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={mockStore}>
        <CartItemComponent item={mocks.mockCartItems[1]} />
      </Provider>
    );
  });
  it("Renders CartItemComponent", () => {
    expect(wrapper).toBeTruthy();
  });

  it("span.name displays correct CartItem name from input", () => {
    expect(
      wrapper.container.getElementsByClassName("name").item(0)?.innerHTML
    ).toEqual("Mock Item 2");
    expect(
      wrapper.container.getElementsByClassName("name").item(0)?.innerHTML
    ).not.toEqual("Mock Item 1");
  });

  it(".price displays correct CartItem price and quantity from input", () => {
    expect(
      wrapper.container.getElementsByClassName("price").item(0)?.innerHTML
    ).not.toEqual("2 x $4");
    expect(
      wrapper.container.getElementsByClassName("price").item(0)?.innerHTML
    ).toEqual("2 x $2");
  });
});
