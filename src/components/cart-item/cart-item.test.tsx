import React from "react";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CartItemComponent from "./cart-item.component";
import mocks from "../../mocks/mock-types";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
Enzyme.configure({ adapter: new Adapter() });

describe("CartItem Component", () => {
  it("Renders item prop", () => {
    const wrapper = render(
      <Provider store={store}>
        <CartItemComponent item={mocks.mockCartItems[1]} />
      </Provider>
    );
    console.log("KBDFKAJSND::", wrapper.find("span.name"));
    expect(wrapper.find("span.name")["0"].data());
  });
});
