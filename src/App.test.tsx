import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { mockStore } from "./mocks/mock-store";

describe("App", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render App component", () => {
    expect(component).toBeTruthy();
  });
});
