import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import StripeButton from "./stripe-button.component";
import { BrowserRouter } from "react-router-dom";

describe("StripeButton", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <StripeButton price={2} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render StripeButton component", () => {
    expect(component).toBeTruthy();
  });
});
