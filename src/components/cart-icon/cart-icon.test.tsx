import React from "react";
import { Provider } from "react-redux";
import CartIcon from "./cart-icon.component";
import { render } from "@testing-library/react";
import { mockStore } from "../../mocks/mock-store";

describe("CartIcon Component", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <CartIcon key={1} />
      </Provider>
    );
  });

  it("should render CartIcon component", () => {
    expect(component).toBeTruthy();
  });

  it("span.item-count displays correct ItemCount from input", () => {
    expect(
      component.container.getElementsByClassName("item-count").item(0)
        ?.innerHTML
    ).toEqual("0");
    expect(
      component.container.getElementsByClassName("item-count").item(0)
        ?.innerHTML
    ).not.toEqual("5");
  });
});
