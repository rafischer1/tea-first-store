import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import { BrowserRouter } from "react-router-dom";
import Shop from "./shop.component";

describe("Shop", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Shop />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render Shop component", () => {
    expect(component).toBeTruthy();
  });
});
