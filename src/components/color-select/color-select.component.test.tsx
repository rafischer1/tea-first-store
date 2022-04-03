import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import ColorContextSelect from "./color-select.component";

describe("ColorSelect", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <ColorContextSelect />
      </Provider>
    );
  });

  it("should render ColorSelect component", () => {
    expect(component).toBeTruthy();
  });

  it("render correct color context select <Option/> in select", () => {
    expect(screen.getByRole("select").children[0]).toHaveValue("red");
    expect(screen.getByRole("select").children[3]).toHaveValue("black");
    expect(screen.getByRole("select").children[3]).not.toHaveValue("blue");
  });
});
