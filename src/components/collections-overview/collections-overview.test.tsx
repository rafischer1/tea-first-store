import React from "react";
import { render, screen } from "@testing-library/react";
import CollectionsOverview from "./collections-overview.component";
import SHOP_DATA from "../../redux/shop/shop.data";
import { Provider } from "react-redux";
import { mockStore } from "../../mocks/mock-store";

describe("CollectionsOverview", () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Provider store={mockStore}>
        <CollectionsOverview collections={[SHOP_DATA[0]]} />
      </Provider>
    );
  });

  it("should render CollectionsOverview component", () => {
    expect(component).toBeTruthy();
  });

  it("length of collection input should equal length of provided props", () => {
    const el = screen.getByRole("props");
    expect(el.children.item(0)).toHaveClass("preview-collection");
  });

  it("should render correct title of collections props", () => {
    const el = screen.getByRole("props");
    expect(el.children.item(0)).toHaveTextContent("Applesauce");
  });
});
