import CartDropdown from "./cart-dropdown.component";
import mocks from "../../mocks/mock-types";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
Enzyme.configure({ adapter: new Adapter() });

describe("CartDropdown Component", () => {
  let wrapper: Enzyme.ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    c;
    wrapper = shallow(
      <Provider store={store}>
        <CartDropdown cartItems={mocks.mockCartItems} dispatch={null} />
      </Provider>
    );
  });

  it("Renders cartItems props", () => {
    expect(wrapper.find(CartDropdown).prop("cartItems")).toHaveLength(3);
  });
});
