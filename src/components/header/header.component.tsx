import React, { useContext } from "react";
import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// @ts-ignore
import logo from "../../assets/tea.png";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { ColorContext, colorNameMap } from "../../contexts/color.context";
import ColorContextSelect from "../color-select/color-select.component";

const Header = () => {
  const { color } = useContext(ColorContext);

  const currentUser = useSelector(
    (state: { user: { currentUser: any } }) => state.user.currentUser
  );
  const cartDropdownHidden = useSelector(
    (state: { cartDropdown: { hidden: boolean } }) => state.cartDropdown.hidden
  );

  return (
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
        <div style={{ cursor: "pointer", outline: "none", marginTop: 5 }}>
          {colorNameMap[color]}
        </div>
        <ColorContextSelect />
      </OptionsContainer>
      {cartDropdownHidden ? null : (
        <CartDropdown cartItems={null} dispatch={null} />
      )}

      {/*<Outlet />*/}
    </HeaderContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   cartDropdownHidden: selectCartHidden,
// });
//
// export default connect(mapStateToProps)(Header);

export default Header;
