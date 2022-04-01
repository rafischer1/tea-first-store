import CartDropdown from "./cart-dropdown.component";
import mocks from "../../mocks/mock-types";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { render, RenderResult } from "@testing-library/react";

describe("CartDropdown component", () => {
  let wrapper: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <CartDropdown cartItems={mocks.mockCartItems} dispatch={null} />
      </Provider>
    );
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
