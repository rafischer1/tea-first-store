import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdownAction } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, dispatch }) => {
  let nav = useNavigate();

  const goToCheckout = () => {
    nav("/checkout");
    dispatch(toggleCartDropdownAction());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">[cart is empty]</span>
        )}
      </div>
      <CustomButton onClick={goToCheckout}>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// * passes dispatch into component as a prop without a second param here
export default connect(mapStateToProps)(CartDropdown);
