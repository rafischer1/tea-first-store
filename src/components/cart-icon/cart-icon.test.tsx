import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import CartIcon from "./cart-icon.component";
import { render } from "@testing-library/react";

describe("CartIcon Component", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <CartIcon key={1} />
      </Provider>
    );
  });

  it("Renders itemCount props", () => {
    expect(component.find(CartIcon).hasClass("item-count")).toEqual(false);
  });
});
