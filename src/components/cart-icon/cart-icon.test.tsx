import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import CartIcon from "./cart-icon.component";
Enzyme.configure({ adapter: new Adapter() });

describe("CartIcon Component", () => {
  let wrapper: Enzyme.ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <CartIcon key={1} />
      </Provider>
    );
  });

  it("Renders itemCount props", () => {
    expect(wrapper.find(CartIcon).hasClass("item-count")).toEqual(false);
  });
});
