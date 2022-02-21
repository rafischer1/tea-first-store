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

type Props = {
  cartItems: CartItem[];
  dispatch: any;
};

const CartDropdown: React.FC<Props> = ({ cartItems, dispatch }: Props) => {
  let nav: NavigateFunction = useNavigate();

  const goToCheckout = (): void => {
    nav("/checkout");
    dispatch(toggleCartDropdownAction());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
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
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const connector = connect(mapStateToProps, null);

// * passes dispatch into component as a prop without a second param here
export default connector(CartDropdown);
