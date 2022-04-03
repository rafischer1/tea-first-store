import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import { BrowserRouter } from "react-router-dom";
import Collection from "./collection.component";

describe("Collection", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Collection />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render Collection component", () => {
    expect(component).toBeTruthy();
  });
});
