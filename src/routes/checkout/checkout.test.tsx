import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import Checkout from "./checkout.component";
import { BrowserRouter } from "react-router-dom";

describe("Checkout", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Checkout />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render Checkout component", () => {
    expect(component).toBeTruthy();
  });
});
