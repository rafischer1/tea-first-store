import React from "react";
import mocks from "../../mocks/mock-types";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { mockStore } from "../../mocks/mock-store";
import CollectionItem from "./collection-item.component";

describe("CCollectionItem Component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={mockStore}>
        <CollectionItem item={mocks.mockCartItems[0]} />
      </Provider>
    );
  });
  it("Renders Collection Item", () => {
    expect(wrapper).toBeTruthy();
  });

  it(".name displays correct CartItem name from input", () => {
    expect(
      wrapper.container.getElementsByClassName("name").item(0)?.innerHTML
    ).toEqual("Mock Item 1");
    expect(
      wrapper.container.getElementsByClassName("name").item(0)?.innerHTML
    ).not.toEqual("Mock Item 2");
  });

  it(".value displays correct CollectionItem price and quantity from input", () => {
    expect(
      wrapper.container.getElementsByClassName("price").item(0)?.innerHTML
    ).toEqual("$1");
  });
});
