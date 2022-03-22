import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { Outlet } from "react-router-dom";
// @ts-ignore
import logo from "../../assets/tea.png";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

type HeaderProps = {
  cartDropdownHidden: boolean;
  currentUser: any;
};

const Header = ({ currentUser, cartDropdownHidden }: HeaderProps) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img
        src={logo}
        style={{ height: 45, borderRadius: 20 }}
        alt="Logo Image"
      />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="shop">SHOP</OptionLink>
      <OptionLink to="contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink
          as={"div"}
          className="option"
          onClick={() => auth.signOut()}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {cartDropdownHidden ? null : (
      <CartDropdown cartItems={null} dispatch={null} />
    )}
    {/*<Outlet />*/}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
