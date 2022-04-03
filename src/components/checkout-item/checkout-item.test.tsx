import React from "react";
import mocks from "../../mocks/mock-types";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { mockStore } from "../../mocks/mock-store";
import CheckoutItem from "./checkout-item.component";

describe("CheckoutItem Component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={mockStore}>
        <CheckoutItem item={mocks.mockCartItems[0]} />
      </Provider>
    );
  });
  it("Renders CheckoutItem", () => {
    expect(wrapper).toBeTruthy();
  });

  it("span.name displays correct CheckoutItem name from input", () => {
    expect(
      wrapper.container.getElementsByClassName("name").item(0)?.innerHTML
    ).toEqual("Mock Item 1");
    expect(
      wrapper.container.getElementsByClassName("name").item(0)?.innerHTML
    ).not.toEqual("Mock Item 2");
  });

  it(".value displays correct CheckoutItem price and quantity from input", () => {
    expect(
      wrapper.container.getElementsByClassName("value").item(0)?.innerHTML
    ).toEqual("1");
    expect(
      wrapper.container.getElementsByClassName("value").item(0)?.innerHTML
    ).not.toEqual("$4");
    expect(
      wrapper.container.getElementsByClassName("price").item(0)?.innerHTML
    ).toEqual("$1");
  });
});
