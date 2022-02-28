import React from "react";
import { connect } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdownAction } from "../../redux/cart/cart.actions";
import { CartItem } from "../../redux/cart/cart.interface";
import CartItemComponent from "../cart-item/cart-item.component";
import { Dispatch } from "@reduxjs/toolkit";

// TODO: invesitage dispatch call
type CartDropdownProps = {
  cartItems: CartItem[] | null;
  dispatch: Dispatch | null;
};

const CartDropdown: React.FC<CartDropdownProps> = ({
  cartItems,
  dispatch,
}: CartDropdownProps) => {
  let nav: NavigateFunction = useNavigate();

  const goToCheckout = (): void => {
    nav("/checkout");
    if (dispatch) {
      dispatch(toggleCartDropdownAction());
    }
  };
  if (cartItems) {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems?.length > 0 ? (
            cartItems?.map((cartItem) => (
              <CartItemComponent key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">[cart is empty]</span>
          )}
        </div>
        <CustomButton
          isGoogleSignIn={false}
          inverted={false}
          onClick={goToCheckout}
        >
          Go To Checkout
        </CustomButton>
      </div>
    );
  } else {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          <span className="empty-message">[cart is empty]</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const connector = connect(mapStateToProps, null);

// * passes dispatch into component as a prop without a second param here
export default connector(CartDropdown);
