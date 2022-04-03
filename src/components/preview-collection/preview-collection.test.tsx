import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";
import PreviewCollection from "./preview-collection.component";
import mocks from "../../mocks/mock-types";

describe("PreviewCollection", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <PreviewCollection
          key={1}
          title={"Totally"}
          items={mocks.mockCartItems}
        />
      </Provider>
    );
  });

  it("should render PreviewCollection component", () => {
    expect(component).toBeTruthy();
  });

  it("render {title} prop correctly", () => {
    expect(
      component.container.getElementsByClassName("title").item(0)?.innerHTML
    ).toEqual("Totally");
  });

  it("render {items} prop correctly", () => {
    expect(
      component.container.getElementsByClassName("preview")[0].className
    ).toEqual("preview");
  });
});
