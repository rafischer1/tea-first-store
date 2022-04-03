import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import { BrowserRouter } from "react-router-dom";
import Home from "./home.component";

describe("Home", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render Home component", () => {
    expect(component).toBeTruthy();
  });
});
