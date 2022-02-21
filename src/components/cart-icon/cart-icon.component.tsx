import React from "react";
import "./cart-icon.styles.scss";
// @ts-ignore
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toggleCartDropdownAction } from "../../redux/cart/cart.actions";
import { AppDispatch } from "../../redux/store";

type CartIconProps = {
  toggleCartDropdown: () => { type: string };
  itemCount: number;
};

const CartIcon = ({ toggleCartDropdown, itemCount }: CartIconProps) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdownAction()),
});

// selector
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CartIcon);
