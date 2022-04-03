import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import Directory from "./directory.component";
import { BrowserRouter } from "react-router-dom";

describe("Directory", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Directory />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render Directory component", () => {
    expect(component).toBeTruthy();
  });
});
