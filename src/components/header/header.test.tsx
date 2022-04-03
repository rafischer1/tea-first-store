import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import { BrowserRouter } from "react-router-dom";
import Header from "./header.component";

describe("Header", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render Header component", () => {
    expect(component).toBeTruthy();
  });
});
