import CartDropdown from "./cart-dropdown.component";
import mocks from "../../mocks/mock-types";
import React from "react";
import { Provider } from "react-redux";
import { render, RenderResult } from "@testing-library/react";
import { mockStore } from "../../mocks/mock-store";
import { BrowserRouter } from "react-router-dom";

describe("CartDropdown component", () => {
  let wrapper: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    wrapper = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <CartDropdown cartItems={mocks.mockCartItems} dispatch={null} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toBeTruthy();
  });
});
