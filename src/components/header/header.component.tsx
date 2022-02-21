import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.styles.scss";
// @ts-ignore
import logo from "../../assets/tea.png";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

type HeaderProps = {
  cartDropdownHidden: boolean;
  currentUser: any;
};

const Header = ({ currentUser, cartDropdownHidden }: HeaderProps) => (
  <div className="header">
    <Link to="/">
      <img src={logo} className="logo-container" alt="Logo Image" />
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartDropdownHidden ? null : (
      <CartDropdown cartItems={null} dispatch={null} />
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
