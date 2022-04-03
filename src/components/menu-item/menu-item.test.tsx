import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import MenuItem from "./menu-item.component";
import { directoryData } from "../../redux/directory/directory.data";
import { BrowserRouter } from "react-router-dom";

describe("MenuItem", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <MenuItem item={directoryData[0]} subtitle={"test"} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render MenuItem component", () => {
    expect(component).toBeTruthy();
  });
});
